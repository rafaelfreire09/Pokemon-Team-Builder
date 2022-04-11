import { createRef } from 'react';
import * as S from './styles';

import { getColor } from '../../utils';
import { Props } from './types';

function Pokemon({ id, name, image, type1, type2}: Props) 
{
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, data: string) => {
        event.dataTransfer.setData('text', data);
    }

    function convert(imageURL: string, type1: string, type2: string): string
    {
        const URLFinal = imageURL + ` ${type1}` + ` ${type2}`;

        return URLFinal;
    }
    
    return (
        <S.Container >
            <S.Id>
                <S.NumberId>
                    #{id}
                </S.NumberId>
            </S.Id>

            {/* <S.Image src={image} onMouseDown={handleClick} draggable="true"/> */}

            <S.Image src={image} onDragStart={(event) => handleDragStart(event, convert(image, type1, type2))} />

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