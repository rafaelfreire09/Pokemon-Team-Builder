import { IPokemon } from "../../types/pokemon";

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