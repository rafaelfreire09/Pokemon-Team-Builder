export interface IPokemon
{
    image: string,
    type1: string,
    type2: string,
}

export interface IProps
{
    idP: number;
    full?: IPokemon | null
}

export interface IGrayScale
{
    grayScale: string
}

export interface ICursor
{
    cursor: string
}