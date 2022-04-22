export interface IImageGet
{
    dream_world: [
        front_default: string,
        front_female: null
    ],
    home: [
        front_default: string,
        front_female: null,
        front_shiny_default: string,
        front_shiny_female: null,
    ],
    "official-artwork": { 
        front_default: string,
    }
}

export interface IURLList
{
    url: string
}

export interface IGetList
{
    list: IPokemonData[]
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