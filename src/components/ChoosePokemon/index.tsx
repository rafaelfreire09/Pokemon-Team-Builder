import { useEffect, useState } from 'react';
import * as S from './styles';

import { IGetList, IPokemonData } from '../../services/types';
import { pokemonData } from '../../utils';

import { CallPokeAPI } from '../../services/api';
import Pokemon from '../Pokemon';

function ChoosePokemon() 
{
    /* const [ pokemonList, setPokemonList ] = useState<any>({ list: [] });
    const [ loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getData = async () => 
        {
            const list = await CallPokeAPI(1);
            
            console.log(list)
    
            setPokemonList(list);
        }

        getData();
    }, [])  */
   
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
                    /* pokemonList.list.map((element: any, index: number) => 
                    {
                        
                            <Pokemon key={index} id={element.id} name={element.name} image={element.image} type1={element.type1} type2={element.type2}/>
                        
                    }) */
                }
            </S.PokeList>
        </S.Container>
    );
}

export default ChoosePokemon;