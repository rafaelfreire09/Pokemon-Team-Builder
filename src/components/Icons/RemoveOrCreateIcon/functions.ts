import { NavigateFunction } from "react-router-dom";

import {v4 as uuidv4} from 'uuid';

import { IMyTeam, ISlot } from "../../../redux/types";
import { IPokemon, ITeam } from "../../../types/pokemon";

import { clearData, removePokemon } from "../../../redux/myTeamSlice";
import { createNewTeam, editTeam } from "../../../redux/teamsSlice";

export function Remove (idSlot: number, dispatch: any)
{
    dispatch(
        removePokemon(
            {
                id: idSlot,
            }
        )
    );
}

export function Create (editing: boolean, allInfo: IMyTeam, allSlots: ISlot[], dispatch: any, navigate: NavigateFunction)
{
    let id = '';

    if (editing)
    {
        id = allInfo.id;
    } else 
    {
        id = uuidv4();
    }

    let team: ITeam = 
    {
        id: id,
        name: allInfo.name,
        pokemons: []
    };

    for (let i = 0; i < Object.keys(allSlots).length; i++)
    {

        const pokemon: IPokemon = 
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
        clearData()
    );

    navigate('/');
}
