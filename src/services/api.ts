import axios from "axios";

import { IPokemonData, IURLList } from './types';

const getPokeInfo = async (URL: string): Promise<IPokemonData> =>
{
    const { data } = await axios.get(URL);

    let pokeType2: string = '';
    
    try {
        pokeType2 = data.types[1].type.name;
    } catch (error) {
        pokeType2 = '';
    }

    const pokemonData: IPokemonData = 
    {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        type1: data.types[0].type.name,
        type2: pokeType2,
    }

    return pokemonData;
}

export const CallPokeAPI = async (size: number): Promise<IPokemonData[]> =>
{  
    let URLList: IURLList[] = [];

    for (let i = 1; i <= size; i++)
    {
        const URL = {
            url: `https://pokeapi.co/api/v2/pokemon/${(i + (2 * (i - 1)))}/`
        };

        URLList.push(URL);
    }

    return Promise.all(
                URLList.map((element) => 
                {
                    return getPokeInfo(element.url)
                })
            )
            .then((pokemonList) => {
                return pokemonList;
            });
}