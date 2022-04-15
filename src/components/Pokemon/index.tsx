import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import * as S from './styles';

import ChooseIcon from '../Icons/ChoosenIcon';

import { getColor } from '../../utils';
import { IProps } from './types';

function Pokemon({ id, name, image, type1, type2}: IProps) 
{
    const [ showIcon, setShowIcon ] = useState('none');

    const allSlots = useAppSelector(state => state.myTeam.slot);

    // If the pokemon is there in some slot, show icon 
    function getIdSlot()
    {
        let found = 0;

        for (let i = 0; i < Object.keys(allSlots).length; i++)
        {
            if (allSlots[i].image == image)
            {
                found++;
                setShowIcon('flex');
            }
        }

        if (found == 0)
        {
            setShowIcon('none');
        }
    }

    // Received the URL, Type 1 and Type 2 and concatenate all in one single string
    function convert(imageURL: string, type1: string, type2: string): string
    {
        const URLFinal = imageURL + ` ${type1}` + ` ${type2}`;

        return URLFinal;
    }

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, data: string) => {
        event.dataTransfer.setData('text', data);
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

            <S.Image src={image} onDragStart={(event) => {
                handleDragStart(event, convert(image, type1, type2));
            }}/>

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