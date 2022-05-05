import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as S from './styles';

import { PokemonData } from '../../services/types';

import { CallPokeAPI } from '../../services/api';
import Pokemon from '../Pokemon';

import { AMOUNT_OF_POKEMONS_TO_RECEIVE } from '../../constants/general.constants';

function ChoosePokemon() 
{
    const [ firstLoading, setFirstLoading ] = useState(true);
    const [ othersLoading, setOthersLoading ] = useState(false);

    const [ pokemonList, setPokemonList ] = useState<PokemonData[]>([]);

    const [isBottom, setIsBottom] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getData = async () => 
        {
            const list = await CallPokeAPI(AMOUNT_OF_POKEMONS_TO_RECEIVE);
            
            setPokemonList(list);
            setFirstLoading(false)
        }

        getData();
    }, []);

    useLayoutEffect(() => {
        const loadItems = async () =>
        {
            setOthersLoading(true);
            
            const newList = await CallPokeAPI(AMOUNT_OF_POKEMONS_TO_RECEIVE);
            
            const finalList = pokemonList.concat(newList)
            
            setPokemonList(finalList);
            setOthersLoading(false);
        }

        if(isBottom) 
        {
            loadItems();
            setIsBottom(false);
        }
    }, [isBottom]);

    const handleScroll = () => {
        const scroller: any = elementRef.current;

        if (scroller.scrollHeight - scroller.scrollTop === scroller.clientHeight) {
            setIsBottom(true);
        }
    }
   
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
            
            <S.Pokemons_Section
                ref={elementRef}
                onScroll={handleScroll}
            >
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