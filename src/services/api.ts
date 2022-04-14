import axios from "axios";

import { IObjectPokemon, IPokeTypes, IFinalData } from './types';

async function getPokeInfo(SinglePokeURL: string): Promise<IFinalData>
{
    const response2 = await axios.get(SinglePokeURL);

    const pokeID: number = response2.data.id;
    const pokeName: string = response2.data.name;
    const pokeImage: string = response2.data.sprites.other.home.front_default;
    const pokeTypes: IPokeTypes = response2.data.types;

    const object: IFinalData = 
    {
        id: pokeID,
        name: pokeName,
        image: pokeImage,
        type1: pokeTypes[0].type.name,
        type2: pokeTypes[1].type.name,
    }

    console.log('3-')
    console.log(object)

    return object;
}

export async function CallPokeAPI(): Promise<IFinalData[]>
{  
    const mainEndpoint = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16";

    const response1 = await axios.get('mainEndpoint');

    const pokemonList: Array<IObjectPokemon> = response1.data.results;

    console.log('1-')
    console.log(pokemonList)

    const pokeURL: IFinalData[] = pokemonList.map( (element: IObjectPokemon) => 
    {
        const SinglePokeURL = `${element.url}`;

        console.log('2-')
        console.log(SinglePokeURL)

        let pokeInfo: IFinalData = {};

        getPokeInfo(SinglePokeURL)
            .then(info => {
                pokeInfo = Object.assign({}, info);
                console.log('4-')
                console.log(pokeInfo)
            });

        return pokeInfo;
    });

    console.log('5-')
    console.log(pokeURL)

    return pokeURL;
}