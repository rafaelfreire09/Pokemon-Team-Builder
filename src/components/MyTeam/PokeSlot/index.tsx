import { useState } from 'react';
import * as S from './styles';

import { getColor } from '../../../utils';

function PokeSlot() 
{
    const [ image, setImage ] = useState('');
    const [ type1, setType1 ] = useState('');
    const [ type2, setType2 ] = useState('');
    
    function getWhatColor(colorType: string)
    {
        return colorType ? colorType : '#ffffff';
    }

    function splitData(data: string)
    {
        const dataArray = data.split(" ");

        const imageURL: string = dataArray[0];
        const type1: string = dataArray[1];
        const type2: string = dataArray[2];
        
        setImage(imageURL);
        setType1(getColor(type1));
        setType2(getColor(type2));
    }

    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => { 
        event.preventDefault();
    }
        
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");

        splitData(data);
    }
    
    return (
        <S.Container onDragOver={enableDropping} onDrop={handleDrop}>
            <S.Division>
                <S.DivisionLine />
                <S.DivisionCircle />
            </S.Division>
            {image && <S.Image src={image} draggable="false"/>}
            <S.BallTop color={getWhatColor(type1)}/>
            <S.BallBottom color={getWhatColor(type2)}/>
        </S.Container>
    );
}

export default PokeSlot;