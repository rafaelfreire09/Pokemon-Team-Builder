import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import * as S from './styles';

import ChooseIcon from '../Icon/ChoosenIcon';

import { getColor } from '../../utils';
import { Props } from './types';

function Pokemon({ id, name, image, type1, type2}: Props) 
{
    const [ showIcon, setShowIcon ] = useState('none');

    const allSlots = useAppSelector(state => state.myTeam.slot);

    useEffect(() => {
        getIdSlot();
    }, [allSlots]);

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

    function convert(imageURL: string, type1: string, type2: string): string
    {
        const URLFinal = imageURL + ` ${type1}` + ` ${type2}`;

        return URLFinal;
    }

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, data: string) => {
        event.dataTransfer.setData('text', data);
    }
    
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