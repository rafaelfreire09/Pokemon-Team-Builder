import { useEffect, useState } from 'react';
import * as S from './styles';
import { IProps } from './types';

import { getColor } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { selectPokemon } from '../../redux/myTeamSlice';

function PokeSlot({ idP, full }: IProps) 
{
    const [ imageURL, setImageURL ] = useState('');
    const [ type1, setType1 ] = useState('');
    const [ type2, setType2 ] = useState('');

    const [ grayScaleState, setGrayScaleState ] = useState('grayscale(0%)');

    const dispatch = useAppDispatch();
    const slot = useAppSelector(state => state.myTeam.slot[idP]);
    const ifEditing = useAppSelector(state => state.myTeam.editing);

    useEffect(() => {
        checkIfEditing();
    }, []);

    useEffect(() => {
        checkIfSelected();
        checkIfRemoved();
    }, [slot]);

    useEffect(() => {
        checkIfTherePokemon();
    }, [slot.image])

    function checkIfTherePokemon ()
    {
        if (slot.image)
        {
            setImageURL(slot.image);
            setType1(getColor(slot.type1));
            setType2(getColor(slot.type2));
        }
    }

    function checkIfEditing ()
    {
        if (ifEditing)
        {
            if (slot.image)
            {
                setImageURL(slot.image);
                setType1(getColor(slot.type1));
                setType2(getColor(slot.type2));
            }
        }
    }
    
    function checkIfRemoved ()
    {
        if (slot.image !== imageURL)
        {
            setImageURL('');
            setType1('');
            setType2('');
        }
    }

    function checkIfSelected()
    {
        if (slot.selected)
        {
            setGrayScaleState("grayscale(0%)");
        } else 
        {
            setGrayScaleState("grayscale(90%)");
        }
    }
    
    function getWhatColor(colorType: string | undefined)
    {
        return colorType ? colorType : '#ffffff';
    }

    const handleClick = () => 
    {
        dispatch(
            selectPokemon(
                {
                    id: idP,
                    image: imageURL,
                }
            )
        );
    }
    
    return (
        <S.Container grayScale={grayScaleState}>
            <S.Division>
                <S.DivisionLine />
                <S.DivisionCircle />
            </S.Division>

            {full?.image && 
                <S.Image 
                    src={full?.image} 
                    cursor={'default'} 
                    draggable="false" 
                />
            }

            {imageURL && 
                <S.Image 
                    src={imageURL} 
                    cursor={'pointer'} 
                    draggable="false" 
                    onClick={handleClick}
                />
            }

            <S.BallTop color={getWhatColor(type1 || getColor(full?.type1))}/>

            <S.BallBottom color={getWhatColor(type2 || getColor(full?.type2))}/>
        </S.Container>
    );
}

export default PokeSlot;