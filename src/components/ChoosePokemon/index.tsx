import { useEffect, useState } from 'react';
import * as S from './styles';

import { IPokemonData } from '../../services/types';

import { CallPokeAPI } from '../../services/api';
import Pokemon from '../Pokemon';

function ChoosePokemon() 
{
    const [ firstLoading, setFirstLoading ] = useState(true);
    const [ othersLoading, setOthersLoading ] = useState(false);

    const [ pokemonList, setPokemonList ] = useState<IPokemonData[]>([]);

    useEffect(() => {
        const getData = async () => 
        {
            const list = await CallPokeAPI(50);
    
            setPokemonList(list);
            setFirstLoading(false)
        }

        getData();
    }, [])
   
    return (
        <S.Container>
            <S.Text>
                Choose 6 Pokémons:
            </S.Text>

            {firstLoading && 
                <S.Loading_Message>
                    Loading ...
                </S.Loading_Message>
            }
            
            <S.Pokemons_Section>
                <S.Pokemon_List>
                    {
                        pokemonList.map((element, index: number) => (
                            <Pokemon key={index} id={element.id} name={element.name} image={element.image} type1={element.type1} type2={element.type2}/>
                        ))
                    }
                </S.Pokemon_List>
                
                {othersLoading &&
                    <S.Loading_Message>
                        Loading ...
                    </S.Loading_Message>
                }
            </S.Pokemons_Section>
        </S.Container>
    );
}

export default ChoosePokemon;