import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';

import * as S from './styles';
import { Props } from './types';

import { whatColor, whatIcon } from '../functions';
import { ClearSlots, CreateTeam, RemoveTeam } from './functions';

function RemoveOrCreateIcon ({ type }: Props)
{
    const [ cursor, setCursor ] = useState('default');
    const [ opacityState, setOpacityState ] = useState("opacity(40%)");
    const [ idSlot, setIdSlot ] = useState(-1);

    const allSlots = useAppSelector(state => state.myTeam.slot);
    const allInfo = useAppSelector(state => state.myTeam);

    const dispatch = useAppDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        checkIfSelected();
        checkIfFull();
        checkIfThereLeastOne();
    }, [allSlots]);

    // Received the params to change the visibility of icon
    function whatType (action: string, type: string, activate: boolean, id: number)
    {
        if (type === "remove" && action === "selected")
        {
            if (activate)
            {
                setOpacityState("opacity(100%)");
                setCursor("pointer");
                setIdSlot(id);
            } else 
            {
                setOpacityState("opacity(40%)");
                setCursor("default");
                setIdSlot(-1);
            }

        }
        
        if (type === "create" && action === "send")
        {
            if (activate)
            {
                setOpacityState("opacity(100%)");
                setCursor("pointer");
            } else 
            {
                setOpacityState("opacity(40%)");
                setCursor("default");
            }
        }

        if (type === "clear")
        {
            if (activate)
            {
                setOpacityState("opacity(100%)");
                setCursor("pointer");
            } else 
            {
                setOpacityState("opacity(40%)");
                setCursor("default");
            }
        }
    }

    // Check if there slot selected
    function checkIfSelected()
    {
        let foundTrue = 0;
        let foundFalse = 0;
        let idFound = -1;
        const action = "selected";

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

        if (foundTrue === 1 && foundFalse === 5)
        {
            whatType(action, type, true, idFound);
        } else 
        {
            whatType(action, type, false, idFound);
        }
    }

    // Check if all slots are fulfilled
    function checkIfFull ()
    {
        let found = 0;
        const action = "send";

        for (let i = 0; i < Object.keys(allSlots).length; i++)
        {
            if (allSlots[i].image)
            {
                found++;
            }
        }

        if (found === 6)
        {
            whatType(action, type, true, -1);
        } else 
        {
            whatType(action, type, false, -1);
        }
    }

    // Check if all slots are fulfilled
    function checkIfThereLeastOne ()
    {
        let found = 0;
        const action = "";

        for (let i = 0; i < Object.keys(allSlots).length; i++)
        {
            if (allSlots[i].image)
            {
                found++;
                break;
            }
        }

        if (found !== 0)
        {
            whatType(action, type, true, -1);
        } else 
        {
            whatType(action, type, false, -1);
        }
    }

    const handleClick = () => 
    {
        if (type === "clear")
        {
            ClearSlots(dispatch);
        }

        if ((type === "remove") && (idSlot !== -1))
        {
            RemoveTeam(idSlot, dispatch);
        }
        
        if ((type === "create") && !allInfo.editing)
        {
            CreateTeam(false, allInfo, allSlots, dispatch, navigate);
        }

        if ((type === "create") && allInfo.editing)
        {
            CreateTeam(true, allInfo, allSlots, dispatch, navigate);
        }
    }

    return (
        <S.Container color={whatColor(type)} opacityLevel={opacityState} cursor={cursor} onClick={handleClick}>
            <S.IconType src={whatIcon(type)} />
        </S.Container>
    );
}

export default RemoveOrCreateIcon;