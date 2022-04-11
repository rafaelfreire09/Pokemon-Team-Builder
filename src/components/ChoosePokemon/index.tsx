import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

import Pokemon from '../Pokemon';
import { CallPokeAPI } from '../../services/api';
import { IFinalData } from '../../services/types';

function ChoosePokemon() 
{
    const [ pokemonList, setPokemonList ] = useState<IFinalData[]>([]);

    const getData = async () => 
    {
        CallPokeAPI()
            .then(object => {
                setPokemonList(object)
            })
    }

    useEffect(() => 
    {
        //getData();
    }, [])

    useEffect(() => console.log(pokemonList), [pokemonList]);

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
            </S.PokeList>
        </S.Container>
    );
}

export default ChoosePokemon;