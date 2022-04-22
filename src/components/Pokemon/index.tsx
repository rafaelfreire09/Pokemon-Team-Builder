import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import * as S from './styles';

import ChooseIcon from '../Icons/ChoosenIcon';

import { getColor } from '../../utils';
import { IProps } from './types';
import { addPokemon } from '../../redux/myTeamSlice';

function Pokemon({ id, name, image, type1, type2 }: IProps) 
{
    const [ showIcon, setShowIcon ] = useState('none');

    const allSlots = useAppSelector(state => state.myTeam.slot);

    const dispatch = useAppDispatch();

    // If the pokemon is there in some slot, show icon 
    function getIdSlot()
    {
        let found = 0;

        for (let i = 0; i < Object.keys(allSlots).length; i++)
        {
            if (allSlots[i].image === image)
            {
                found++;
                setShowIcon('flex');
            }
        }

        if (found === 0)
        {
            setShowIcon('none');
        }
    }

    // Check if all slots are fulfilled
    function checkIfFull (): boolean
    {
        let found = 0;

        for (let i = 0; i < Object.keys(allSlots).length; i++)
        {
            if (allSlots[i].image)
            {
                found++;
            }
        }

        if (found === 6)
        {
            return true
        } else 
        {
            return false
        }
    }

    const handleClick = () => 
    {
        if (!checkIfFull())
        {
            dispatch(
                addPokemon(
                    {
                        id: id,
                        image: image,
                        type1: type1,
                        type2: type2,
                        selected: true
                    }
                )
            );
        }
    }

    useEffect(() => {
        getIdSlot();
    }, [allSlots]);
    
    return (
        <S.Container>
            <S.Icon setDisplay={showIcon}>
                <ChooseIcon />
            </S.Icon>

            <S.Id>
                <S.NumberId>
                    #{id}
                </S.NumberId>
            </S.Id>

            <S.Image 
                src={image} 
                onClick={handleClick}
                draggable="false"
            />

            <S.Name>
                {name}
            </S.Name>

            <S.Colors>
                <S.ColorRight color={getColor(type1)}/>
                <S.ColorLeft color={getColor(type2)}/>
            </S.Colors>
        </S.Container>
    );
}

export default Pokemon;