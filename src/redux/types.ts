export interface ISlot
{
    id: number;
    image: string;
    type1: string,
    type2: string,
    selected: boolean;
}

export interface IRemovePokemon
{
    id: number;
}

export interface ITeamName
{
    name: string;
}

export interface IRemoveTeam
{
    id: string;
}