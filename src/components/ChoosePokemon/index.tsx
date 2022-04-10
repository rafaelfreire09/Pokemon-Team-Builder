import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

import Pokemon from '../Pokemon';

interface Poke 
{
    name: string,
    url: string
}

const urls = 
{
    url1: 'https://pokeapi.co/api/v2/pokemon/1/',
    url2: 'https://pokeapi.co/api/v2/pokemon/2/',
    url3: 'https://pokeapi.co/api/v2/pokemon/3/',
    url4: 'https://pokeapi.co/api/v2/pokemon/4/',
    url5: 'https://pokeapi.co/api/v2/pokemon/5/',
    url6: 'https://pokeapi.co/api/v2/pokemon/6/',
    url7: 'https://pokeapi.co/api/v2/pokemon/7/',
    url8: 'https://pokeapi.co/api/v2/pokemon/8/',
    url9: 'https://pokeapi.co/api/v2/pokemon/9/',
}

function ChoosePokemon() 
{
    const [ pokemonList, setPokemonList ] = useState([]);
    const [ iterator, setIterator ] = useState(1);

    const getData = async () => 
    {
        const U = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10"

        const response = await axios.get(U);

        setPokemonList(response.data.results);

        //console.log(U)
    }

    useEffect(() => 
    {
        //getData();
    }, [])

    useEffect(() => {}, [pokemonList]);

    function calcIterator<Number>()
    {
        const listSize = pokemonList.length;

        return listSize-(listSize-iterator);
    }

    return (
        <S.Container>
            <S.Text>
                Choose 6 Pokémons:
            </S.Text>

            <S.PokeList>
                {/* {pokemonList.map((pokemon: any) => {
                    <Pokemon url={pokemon.url}/>
                    //console.log(pokemon.url);
                    //setIterator(iterator + 1);
                })} */}
                {/* {pokemonList.map((pokemon: Poke, index: number) => {
                    console.log(pokemon.url);
                    console.log(index);
                    <Pokemon key={index} url={pokemon.url}/>
                })} */}
                {/* {<Pokemon url={pokemonList[0]}/>} */}
                {<Pokemon url={urls.url1}/>}
            </S.PokeList>
        </S.Container>
    );
}

export default ChoosePokemon;