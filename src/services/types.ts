export interface IObjectPokemon
{
    name: string,
    url: string
}

export interface IPokeTypes
{
    [id: number]: {
        slot: number,
        type: {
            name: string
            url: string
        }
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