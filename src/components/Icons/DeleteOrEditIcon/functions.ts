import { NavigateFunction } from "react-router-dom";

import { editTeamCreated } from "../../../redux/myTeamSlice";
import { deleteTeam } from "../../../redux/teamsSlice";
import { Team } from "../../../types/pokemon";

export function DeleteTeam (team: Team, dispatch: any)
{
    dispatch(
        deleteTeam(
            {
                id: team.id
            }
        )
    );
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
