import { useEffect, useState } from 'react';
import * as S from './styles';

import { getColor } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { addPokemon, selectPokemon } from '../../../redux/myTeamSlice';
import { IPokemon } from '../types';

interface Props
{
    idP: number;
    full?: IPokemon | null
}

function PokeSlot({ idP, full }: Props) 
{
    const [ imageURL, setImageURL ] = useState('');
    const [ type1, setType1 ] = useState('');
    const [ type2, setType2 ] = useState('');

    const [ grayScaleState, setGrayScaleState ] = useState('grayscale(0%)');

    const dispatch = useAppDispatch();

    const allSlots = useAppSelector(state => state.myTeam.slot);

    useEffect(() => {
        //console.log(imageURL);
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
    
    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => { 
        event.preventDefault();
    }
        
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");

        splitData(data);
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


            {/* <S.BallTop color={full?.image ? (full?.type1 ? full?.type1 : '#ffffff') : getWhatColor(type1)}/>

            <S.BallBottom color={full?.image ? (full?.type2 ? full?.type2 : '#ffffff') :getWhatColor(type2)}/> */}
        </S.Container>
    );
}

export default PokeSlot;