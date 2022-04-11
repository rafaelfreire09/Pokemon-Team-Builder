import { createRef } from 'react';
import * as S from './styles';

import { colorTypes } from '../../utils';
import { Props } from './types';

function Pokemon({ id, name, image, type1, type2}: Props) 
{
    function getColor(type: string): string
    {
        let color = '';

        for (let i = 1; i <= Object.keys(colorTypes).length; i++)
        {
            if (colorTypes[i].name == type)
            {
                color = colorTypes[i].color;
            }
        }

        if (color)
        {
            return color;
        } else 
        {
            return color = '#ffffff';
        }        
    }

    function dragStart (e: any)
    {
        e.target.classList.add('dragging');
    }

    const handleClick = (item: any) =>
    {
        console.log('Clicou');
        //console.log(e.target);
        //item.addEventListener('dragstart', dragStart);
    }

    //document.querySelector(reff).addEventListener('click', (e) => { console.log("Clicou"); });
    
    return (
        <S.Container>
            <S.Id>
                <S.NumberId>
                    #{id}
                </S.NumberId>
            </S.Id>

            <S.Image src={image} onMouseDown={handleClick} draggable="true"/>

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