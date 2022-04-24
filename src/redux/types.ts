export type IMyTeam = 
{
    id: string
    name: string
    editing: boolean
    allTrue: boolean
    slot: ISlot[]
}

export type ISlot = 
{
    image: string,
    type1: string,
    type2: string,
    selected: boolean,
}

export type IChangeTeamName = 
{
    name: string;
}

export type IAddPokemon = 
{
    id: number;
    image: string;
    type1: string,
    type2: string,
    selected: boolean;
}

export type IRemovePokemon = 
{
    id: number;
}

export type ISelectPokemon = 
{
    id: number;
    image: string;
}

export type IRemoveTeam = 
{
    id: string;
}