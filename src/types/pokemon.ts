export interface IPokemon
{
    image: string,
    type1: string,
    type2: string,
}

export interface ITeam
{
    name: string;
    pokemons: IPokemon[]
}