import { NavigateFunction } from "react-router-dom";

import { editTeamCreated } from "../../../redux/myTeamSlice";
import { deleteTeam } from "../../../redux/teamsSlice";
import { ITeam } from "../../../types/pokemon";

export function Delete (team: ITeam, dispatch: any)
{

    dispatch(
        deleteTeam(
            {
                id: team.id
            }
        )
    );
}

export function Edit (team: ITeam, dispatch: any, navigate: NavigateFunction)
{
    dispatch(
        editTeamCreated(
            team
        )
    );

    navigate('/create-new-team');
}
