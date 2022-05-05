import axios from "axios";
import { NavigateFunction } from "react-router-dom";

import { BASE_URL, DELETE_TEAM_ROUTE, PRE_URL } from "../../../constants/backend.constants";

import { editTeamCreated } from "../../../redux/myTeamSlice";
import { Team } from "../../../types/pokemon";

export async function DeleteTeam (team: Team, dispatch: any)
{
    try 
    {
        const URL = BASE_URL + PRE_URL + DELETE_TEAM_ROUTE + team._id;

        await axios.delete(URL);
    } catch (error) 
    {
        console.log(error);
    }

    window.location.reload();
}

export function EditTeam (team: Team, dispatch: any, navigate: NavigateFunction)
{
    dispatch(
        editTeamCreated(
            team
        )
    );

    navigate('/create-new-team');
}
