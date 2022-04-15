import { useEffect, useState } from 'react';
import * as S from './styles';

import { IPokemonData } from '../../services/types';
import { pokemonData } from '../../utils';

import { CallPokeAPI } from '../../services/api';
import Pokemon from '../Pokemon';

function ChoosePokemon() 
{
    const [ pokemonList, setPokemonList ] = useState<IPokemonData[]>([]);
    const [ loaded, setLoaded] = useState(false);

    /* useEffect(() => 
    {
        const getData = async () => 
        {
            const list = await CallPokeAPI(3);
    
            setPokemonList(list);
            console.log(list)
            console.log(pokemonList.length)
            await CallPokeAPI(3)
                .then((list) => 
                {
                    console.log(list)
                    setPokemonList(list);
                })
            
        }

        //getData();

            CallPokeAPI(3)
            .then((list) => 
            {
                console.log(list)
                setPokemonList(list);
            })

        
        console.log("chegou1")
        console.log(pokemonList.length)
    }, []) 
    
    */

    /* useEffect(() => {
        setLoaded(true);
        console.log(pokemonList.length)
        console.log("chegou2")
    }, [pokemonList]); */

    return (
        <S.Container>
            <S.Text>
                Choose 6 Pokémons:
            </S.Text>

            <S.PokeList>
                {
                    pokemonData.map((element, index) => {
                        return (
                            <Pokemon key={index} id={element.id} name={element.name} image={element.image} type1={element.type1} type2={element.type2}/>
                        )
                    })
                }
                {
                    /* pokemonList.map((element, index) => 
                    {
                        return (
                            <Pokemon key={index} id={element.id} name={element.name} image={element.image} type1={element.type1} type2={element.type2}/>
                        )
                    }) */
                }
            </S.PokeList>
        </S.Container>
    );
}

export default ChoosePokemon;