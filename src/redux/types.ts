export type Slot = 
{
    image: string,
    type1: string,
    type2: string,
    selected: boolean,
}

export type MyTeam = 
{
    _id: string | undefined | null
    name: string
    editing: boolean
    allTrue: boolean
    slot: Slot[]
}

export type ChangeTeamName = 
{
    name: string;
}

export type AddPokemon = 
{
    id: number;
    image: string;
    type1: string,
    type2: string,
    selected: boolean;
}

export type RemovePokemon = 
{
    id: number;
}

export type SelectPokemon = 
{
    id: number;
    image: string;
}

export type RemoveTeam = 
{
    id: string;
}

export type ClearTeam = 
{
    clearName: boolean;
}