import { Pokemon } from "../../types/pokemon";

export type Props =
{
    idP: number;
    full?: Pokemon | null
}

export type StyledProps =
{
    cursor?: string
    grayScale?: string
}
