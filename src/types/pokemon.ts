export type Pokemon =
{
    image: string,
    type1: string,
    type2: string,
    _id?: string
}

export type Team =
{
    name: string;
    pokemons: Pokemon[]
    _id?: string | null;
    _v?: number;
}