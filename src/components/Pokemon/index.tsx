import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

import PokemonImage from '../../assets/pokemon-image.png';
import { colorTypes } from '../../utils';
import { Props } from './types';


function Pokemon({ id, name, image, type1, type2}: Props) 
{
    function getColor(type: string): string
    {
        const colorCorrect = `colorTypes.${type}`

        return colorCorrect;
    }
    
    return (
        <S.Container>
            <S.Id>
                <S.NumberId>
                    #{id}
                </S.NumberId>
            </S.Id>

            <S.Image src={image}/>

            <S.Name>
                {name}
            </S.Name>

            <S.Colors>
                <S.ColorRight color={colorTypes.n1.dark}/>
                <S.ColorLeft color={colorTypes.n1.dark}/>
            </S.Colors>
        </S.Container>
    );
}

export default Pokemon;