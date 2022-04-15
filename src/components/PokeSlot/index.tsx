import { useEffect, useState } from 'react';
import * as S from './styles';
import { IProps } from './types';

import { getColor } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { addPokemon, selectPokemon } from '../../redux/myTeamSlice';

function PokeSlot({ idP, full }: IProps) 
{
    const [ imageURL, setImageURL ] = useState('');
    const [ type1, setType1 ] = useState('');
    const [ type2, setType2 ] = useState('');

    const [ grayScaleState, setGrayScaleState ] = useState('grayscale(0%)');

    const dispatch = useAppDispatch();

    const allSlots = useAppSelector(state => state.myTeam.slot);

    function checkIfSelected()
    {
        if (allSlots[idP].selected)
        {
            setGrayScaleState("grayscale(0%)");
        } else 
        {
            setGrayScaleState("grayscale(90%)");
        }
    }

    function checkIfRemoved ()
    {
        if (allSlots[idP].image != imageURL)
        {
            setImageURL('');
            setType1('');
            setType2('');
        }
    }
    
    function getWhatColor(colorType: string | undefined)
    {
        return colorType ? colorType : '#ffffff';
    }

    // Split the string into 3
    // Ex: "https:.../1.png grass poison" to "https.../1.png", "grass" and "poison".
    function splitData(data: string)
    {
        const dataArray = data.split(" ");

        const imageURLR: string = dataArray[0];
        const type1: string = dataArray[1];
        const type2: string = dataArray[2];
        
        setImageURL(imageURLR);
        setType1(getColor(type1));
        setType2(getColor(type2));
    }
    
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        
        splitData(data);
    }

    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => { 
        event.preventDefault();
    }

    const handleClick = () => 
    {
        dispatch(
            selectPokemon(
                {
                    id: idP,
                    image: imageURL,
                    selected: true
                }
            )
        );
    }

    useEffect(() => {
        dispatch(
            addPokemon(
                {
                    id: idP,
                    image: imageURL,
                    selected: true
                }
            )
        );
    }, [ imageURL ])

    useEffect(() => {
        checkIfSelected();
        checkIfRemoved();
    }, [allSlots]);
    
    return (
        <S.Container grayScale={grayScaleState} onDragOver={enableDropping} onDrop={handleDrop}>
            <S.Division>
                <S.DivisionLine />
                <S.DivisionCircle />
            </S.Division>

            {full?.image && <S.Image src={full?.image} cursor={'default'} draggable="false" onClick={handleClick}/>}

            {imageURL && <S.Image src={imageURL} cursor={'pointer'} draggable="false" onClick={handleClick}/>}

            <S.BallTop color={getWhatColor(type1 || getColor(full?.type1))}/>

            <S.BallBottom color={getWhatColor(type2 || getColor(full?.type2))}/>
        </S.Container>
    );
}

export default PokeSlot;