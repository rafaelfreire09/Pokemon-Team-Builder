import { IPokemon } from "../../types/pokemon";

export interface IProps
{
    idP: number;
    full?: IPokemon | null
}

export interface IStyledProps
{
    cursor?: string
    grayScale?: string
}
