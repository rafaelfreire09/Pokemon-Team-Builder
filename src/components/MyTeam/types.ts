export interface IPokemon
{
    image: string,
    type1: string,
    type2: string,
}

export interface ITeam
{
    name: string
    pokemons: IPokemon[]
}

export interface IProps
{
    teamName?: string | null;
    text?: string | null;
    pen?: boolean;
    icons?: boolean;
    team?: ITeam;
}