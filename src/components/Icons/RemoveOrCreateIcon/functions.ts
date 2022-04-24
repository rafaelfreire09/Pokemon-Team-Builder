import { NavigateFunction } from "react-router-dom";

import {v4 as uuidv4} from 'uuid';

import { MyTeam, Slot } from "../../../redux/types";
import { Pokemon, Team } from "../../../types/pokemon";

import { clearData, removePokemon } from "../../../redux/myTeamSlice";
import { createNewTeam, editTeam } from "../../../redux/teamsSlice";

export function ClearSlots (dispatch: any)
{
    dispatch(
        clearData(
            {
                clearName: false
            }
        )
    );
}

export function RemoveTeam (idSlot: number, dispatch: any)
{
    dispatch(
        removePokemon(
            {
                id: idSlot,
            }
        )
    );
}

export function CreateTeam (editing: boolean, allInfo: MyTeam, allSlots: Slot[], dispatch: any, navigate: NavigateFunction)
{
    let id = '';

    if (editing)
    {
        id = allInfo.id;
    } else 
    {
        id = uuidv4();
    }

    let team: Team = 
    {
        id: id,
        name: allInfo.name,
        pokemons: []
    };

    for (let i = 0; i < Object.keys(allSlots).length; i++)
    {

        const pokemon: Pokemon = 
        {
            image: allSlots[i].image,
            type1: allSlots[i].type1,
            type2: allSlots[i].type2
        }

        team.pokemons.push(pokemon);
    }

    if (editing)
    {
        dispatch(
            editTeam(
                team
            )
        );
    } else 
    {
        dispatch(
            createNewTeam(
                team
            )
        );
    }

    dispatch(
        clearData(
            {
                clearName: true
            }
        )
    );

    navigate('/');
}
