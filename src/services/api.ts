import axios from "axios";

import { PokemonData, URLList } from './types';

const getURLs = (size: number): URLList[] => 
{
    let list: URLList[] = [];

    for (let i = 1; i <= size; i++)
    {
        const URL = {
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 900) + 1}/`
        };

        list.push(URL);
    }

    return list;
}

const getPokeInfo = async (URL: string): Promise<PokemonData> =>
{
    const { data } = await axios.get(URL);

    let pokeType2: string = '';
    
    try {
        pokeType2 = data.types[1].type.name;
    } catch (error) {
        pokeType2 = '';
    }

    const pokemonData: PokemonData = 
    {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        type1: data.types[0].type.name,
        type2: pokeType2,
    }

    return pokemonData;
}

export const CallPokeAPI = async (size: number): Promise<PokemonData[]> =>
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