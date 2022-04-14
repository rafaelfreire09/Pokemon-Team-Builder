import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import * as S from './styles';

import { removePokemon } from '../../../redux/myTeamSlice';

import Remove from '../../../assets/remove-icon.png';
import Choosen from '../../../assets/choosen-icon.png';
import Submit from '../../../assets/choosen-icon.png';

interface IIconType
{
    type: string
}

function RemOrSubIcon ({ type }: IIconType)
{
    const [ cursor, setCursor ] = useState('default');
    const [ opacityState, setOpacityState ] = useState("opacity(40%)");
    const [ idSlot, setIdSlot ] = useState(-1);

    const allSlots = useAppSelector(state => state.myTeam.slot);
    const dispatch = useAppDispatch();

    useEffect(() => {
        checkIfSelected();
    }, [allSlots]);

    function checkIfSelected()
    {
        let foundTrue = 0;
        let foundFalse = 0;
        let idFound = -1;

        for (let i = 0; i < Object.keys(allSlots).length; i++)
        {
            if (allSlots[i].selected)
            {
                if (allSlots[i].image)
                {
                    foundTrue++;
                    idFound = i;
                }
            } else 
            {
                foundFalse++;
            }
        }

        if (foundTrue == 1 && foundFalse == 5)
        {
            setOpacityState("opacity(100%)");
            setCursor("pointer");
            setIdSlot(idFound);
        } else 
        {
            setOpacityState("opacity(40%)");
            setCursor("default");
            setIdSlot(-1);
        }
    }

    const handleClick = () => 
    {
        if ((type == "remove") && (idSlot != -1))
        {
            dispatch(
                removePokemon(
                    {
                        id: idSlot,
                    }
                )
            );
        } else if ((type == "submit") && (idSlot != -1))
        {
            
        }
    }

    function whatIcon (icon: string): any
    {
        if(icon == 'remove')
        {
            return Remove;
        } else if (icon == 'submit')
        {
            return Submit;
        } else
        {
            return Choosen;
        }
    }

    function whatColor (color: string): string
    {
        if(color == 'remove')
        {
            return "#F8635A";
        } else if (color == 'submit')
        {
            return "#6068e2";
        } else 
        {
            return "#8FDA58";
        }
    }

    return (
        <S.Container color={whatColor(type)} opacityLevel={opacityState} cursor={cursor} onClick={handleClick}>
            <S.IconType src={whatIcon(type)} />
        </S.Container>
    );
}

export default RemOrSubIcon;