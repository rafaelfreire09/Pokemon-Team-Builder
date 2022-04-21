import axios from "axios";

import { IGetList, IPokemonData, IURLList } from './types';

const getPokeInfo = async (SinglePokeURL: string): Promise<IPokemonData> =>
{
    const response = await axios.get(SinglePokeURL);

    const pokeID: number = response.data.id;
    const pokeName: string = response.data.name;
    const pokeImage: string = response.data.sprites.other.home.front_default;
    const pokeType1: string = response.data.types[0].type.name;

    let pokeType2: string = '';
    try {
        pokeType2 = response.data.types[1].type.name;
    } catch (error) {
        pokeType2 = '';
    }

    const object: IPokemonData = 
    {
        id: pokeID,
        name: pokeName,
        image: pokeImage,
        type1: pokeType1,
        type2: pokeType2,
    }

    return object;
}

export const CallPokeAPI = async (size: number): Promise<IGetList> =>
{  
    let URLList: IURLList[] = [];

    for (let i = 1; i <= size; i++)
    {
        const URL = {
            url: `https://pokeapi.co/api/v2/pokemon/${i}/`
        };

        URLList.push(URL);
    }

    let pokemonList: IGetList = { list: [] };

    Promise.all(
        URLList.map(async (element) => 
        {
            const pokemon = await getPokeInfo(element.url);

            pokemonList.list.push(pokemon);
        })
    )

    return pokemonList;
}