import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import * as S from './styles';
import { IIconType } from './types';

import Remove from '../../../assets/remove-icon.png';
import Choosen from '../../../assets/choosen-icon.png';
import Submit from '../../../assets/choosen-icon.png';

import { removePokemon } from '../../../redux/myTeamSlice';
import { createNewTeam } from '../../../redux/teamsSlice';
import { IPokemon, ITeam } from '../../../types/pokemon';

function RemOrSubIcon ({ type }: IIconType)
{
    let navigate = useNavigate();

    const [ cursor, setCursor ] = useState('default');
    const [ opacityState, setOpacityState ] = useState("opacity(40%)");
    const [ idSlot, setIdSlot ] = useState(-1);

    const allSlots = useAppSelector(state => state.myTeam.slot);
    const teamName = useAppSelector(state => state.myTeam.name);
    const dispatch = useAppDispatch();

    function whatIcon (icon: string): any
    {
        if(icon === 'remove')
        {
            return Remove;
        } else if (icon === 'submit')
        {
            return Submit;
        } else
        {
            return Choosen;
        }
    }

    function whatColor (color: string): string
    {
        if(color === 'remove')
        {
            return "#F8635A";
        } else if (color === 'submit')
        {
            return "#6068e2";
        } else 
        {
            return "#8FDA58";
        }
    }

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

        } else if (type === "submit" && action === "send")
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

    const handleClick = () => 
    {
        if ((type === "remove") && (idSlot !== -1))
        {
            dispatch(
                removePokemon(
                    {
                        id: idSlot,
                    }
                )
            );
        } 
        
        if (type == "submit")
        {
            //console.log('Chegou1')

            let team: ITeam = 
            {
                name: teamName,
                pokemons: []
            };

            for (let i = 0; i < Object.keys(allSlots).length; i++)
            {
                //console.log(allSlots[i]);

                const pokemon: IPokemon = 
                {
                    image: allSlots[i].image,
                    type1: allSlots[i].type1,
                    type2: allSlots[i].type2
                }

                //console.log(pokemon)

                team.pokemons.push(pokemon);
            }

            //console.log(team.pokemons)

            dispatch(
                createNewTeam(
                    team
                )
            );

            navigate('/');
        }
    }

    useEffect(() => {
        checkIfSelected();
        checkIfFull();
    }, [allSlots]);

    return (
        <S.Container color={whatColor(type)} opacityLevel={opacityState} cursor={cursor} onClick={handleClick}>
            <S.IconType src={whatIcon(type)} />
        </S.Container>
    );
}

export default RemOrSubIcon;