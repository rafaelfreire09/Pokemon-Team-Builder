import { useEffect, useState } from 'react';

import * as S from './styles';

import Pokemon from '../Pokemon';
import { CallPokeAPI } from '../../services/api';
import { IPokemonData } from '../../services/types';

const data = 
[
    {
        id: 1,
        name: "Bulbasar",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
        type1: "grass",
        type2: "poison",
    },
    {
        id: 2,
        name: "Ivysaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
        type1: "grass",
        type2: "poison",
    },
    {
        id: 3,
        name: "Venusaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
        type1: "grass",
        type2: "poison",
    },
    {
        id: 4,
        name: "Charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        type1: "grass",
        type2: "poison",
    },
    {
        id: 5,
        name: "Charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
        type1: "fire",
        type2: "",
    },
    {
        id: 6,
        name: "Charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
        type1: "fire",
        type2: "flying",
    },
    {
        id: 7,
        name: "Squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
        type1: "water",
        type2: "",
    },
    {
        id: 8,
        name: "wartortle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
        type1: "water",
        type2: "",
    },
    {
        id: 9,
        name: "blastoise",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
        type1: "water",
        type2: "",
    },
    {
        id: 10,
        name: "caterpie",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
        type1: "bug",
        type2: "",
    },
    {
        id: 11,
        name: "metapod",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
        type1: "bug",
        type2: "",
    },
    {
        id: 12,
        name: "butterfree",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
        type1: "bug",
        type2: "flying",
    },
    {
        id: 13,
        name: "weedle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
        type1: "bug",
        type2: "poison",
    },
    {
        id: 14,
        name: "kakuna",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
        type1: "bug",
        type2: "poison",
    },
    {
        id: 15,
        name: "beedrill",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
        type1: "bug",
        type2: "poison",
    },
    {
        id: 16,
        name: "pidgey",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
        type1: "normal",
        type2: "flying",
    },
]

function ChoosePokemon() 
{
    const [ pokemonList, setPokemonList ] = useState<IPokemonData[]>([]);
    const [ loaded, setLoaded] = useState(false);

    useEffect(() => 
    {
        const getData = async () => 
        {
            /* const list = await CallPokeAPI(3);
    
            setPokemonList(list);
            console.log(list)
            console.log(pokemonList.length)
            await CallPokeAPI(3)
                .then((list) => 
                {
                    console.log(list)
                    setPokemonList(list);
                })
            */
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
                    pokemonList.map((element, index) => 
                    {
                        return (
                            <Pokemon key={index} id={element.id} name={element.name} image={element.image} type1={element.type1} type2={element.type2}/>
                        )
                    })
                }
                {/* {
                    data.map((element, index) => {
                        return (
                            <Pokemon key={index} id={element.id} name={element.name} image={element.image} type1={element.type1} type2={element.type2}/>
                        )
                    })
                } */}
                {/* {
                    data.map((element, index, array) => {
                        return (
                            <Pokemon key={index} id={array[index].id} name={array[index].name} image={array[index].image} type1={array[index].type1} type2={array[index].type2}/>
                        )
                    })
                } */}
                {/* {
                    pokemonList.map((pokemon, index, array) => 
                    {
                        return (
                            <Pokemon key={array.length} id={array[index].id} name={array[index].name} image={array[index].image} type1={array[index].type1} type2={array[index].type2}/>
                        )
                    })
                } */}
                {/* {
                    loadead && <Pokemon key={pokemonList[0].id} id={pokemonList[0].id} name={pokemonList[0].name} image={pokemonList[0].image} type1={pokemonList[0].type1} type2={pokemonList[0].type2}/>
                } */}
            </S.PokeList>
        </S.Container>
    );
}

export default ChoosePokemon;