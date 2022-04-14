import { ReactNode } from 'react';

export interface IPokemon
{
    image: string,
    type1: string,
    type2: string,
}

interface ITeam
{
    name: string
    pokemons: IPokemon[]
}

export interface Props
{
    teamName?: string | null;
    text?: string | null;
    pen?: boolean;
    icons?: boolean;
    team?: ITeam;
}