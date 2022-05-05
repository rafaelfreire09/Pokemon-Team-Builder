import axios from "axios";
import { NavigateFunction } from "react-router-dom";

import { BASE_URL, CREATE_TEAM_ROUTE, PRE_URL, UPDATE_TEAM_ROUTE } from "../../../constants/backend.constants";

import { MyTeam, Slot } from "../../../redux/types";
import { Pokemon, Team } from "../../../types/pokemon";

import { clearData, removePokemon } from "../../../redux/myTeamSlice";

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

function ClearAndRedirect(dispatch: any, navigate: NavigateFunction)
{
    dispatch(
        clearData(
            {
                clearName: true
            }
        )
    );

    navigate('/');
}

export async function CreateTeam (editing: boolean, allInfo: MyTeam, allSlots: Slot[], dispatch: any, navigate: NavigateFunction)
{
    let id = undefined;

    if (editing)
    {
        id = allInfo._id;
    }

    let team: Team = 
    {
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
        team._id = allInfo._id;

        try 
        {
            const URL = BASE_URL + PRE_URL + UPDATE_TEAM_ROUTE + team._id;

            await axios.put(URL,
                team
            );

            ClearAndRedirect(dispatch, navigate);
        } catch (error) 
        {
            console.log(error);
        }
    } else 
    {
        try 
        {
            const URL = BASE_URL + PRE_URL + CREATE_TEAM_ROUTE;

            await axios.post(URL, 
            {
                team
            });

            ClearAndRedirect(dispatch, navigate);
        } catch (error) 
        {
            console.log(error);
        }
    }

    
}
