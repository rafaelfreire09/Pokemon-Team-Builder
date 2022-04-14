export interface IURLList
{
    url: string
}

export interface IPokemonData
{
    id: number,
    name: string,
    image: string,
    type1: string,
    type2: string
}

export interface IObjectPokemon
{
    name: string,
    url: string
}

export interface IPokeTypes
{
    slot: number,
    type: {
        name: string
        url: string
    }
}

export interface IFinalData
{
    id?: number,
    name?: string,
    image?: string,
    type1?: string,
    type2?: string
}