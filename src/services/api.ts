import axios from "axios";

import { IPokemonData, IURLList } from './types';

const getURLs = (size: number): IURLList[] => 
{
    let list: IURLList[] = [];

    for (let i = 1; i <= size; i++)
    {
        const URL = {
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 900) + 1}/`
        };

        list.push(URL);
    }

    return list;
}

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
    const URLList = getURLs(size);

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