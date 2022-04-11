import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

import Pokemon from '../Pokemon';
import { CallPokeAPI } from '../../services/api';
import { IFinalData } from '../../services/types';

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
]

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

    useEffect(() => {}, [pokemonList]);

    return (
        <S.Container>
            <S.Text>
                Choose 6 Pokémons:
            </S.Text>

            <S.PokeList>
                {/* {<Pokemon id={8} name={"wartortle"} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png"} type1={"water"} type2={""}/>}  */}

                {data.map((element, index) => {
                    return <Pokemon key={index} id={element.id} name={element.name} image={element.image} type1={element.type1} type2={element.type2}/>
                })}
            </S.PokeList>
        </S.Container>
    );
}

export default ChoosePokemon;