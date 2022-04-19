import { ITeam } from "../../types/pokemon";

export interface IProps
{
    teamName?: string | null;
    text?: string | null;
    pen?: boolean;
    icons?: boolean;
    team?: ITeam;
}