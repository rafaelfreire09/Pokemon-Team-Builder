export type Pokemon =
{
    image: string,
    type1: string,
    type2: string,
}

export type Team =
{
    id: string;
    name: string;
    pokemons: Pokemon[]
}