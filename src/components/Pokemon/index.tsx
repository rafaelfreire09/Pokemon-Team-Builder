import { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './styles';

import PokemonImage from '../../assets/pokemon-image.png';
import { types } from '../../utils';

interface Props
{
    url: string;
}

interface DataSpritesOther
{
    dream_world: {

    },
    home: {

    },
    official_artworks: {

    },
}

function Pokemon(props: Props) 
{
    const [ URL, setURL ] = useState('');

    const [ pokeID, setPokeID ] = useState(0);
    const [ pokeImage, setPokeImage ] = useState('');
    const [ pokeName, setPokeName ] = useState('');
    const [ pokeType1, setPokeType1 ] = useState('');
    const [ pokeType2, setPokeType2 ] = useState('');

    //console.log(props.url);

    const getData = async () => 
    {
        const response = await axios.get(URL);

        setPokeID(response.data.id);
        setPokeName(response.data.name);
        setPokeImage(response.data.sprites.other.home.front_shiny);
        setPokeType1(response.data.types.0.type.name);
        setPokeType2(response.data.types.1.type.name);

        //console.log(U)
    }

    useEffect(() => {
        //getData();
    }, );

    return (
        <S.Container>
            <S.Id>
                <S.NumberId>
                    #1
                </S.NumberId>
            </S.Id>

            <S.Image src={PokemonImage}/>

            <S.Name>
                {}
            </S.Name>

            <S.Colors>
                <S.ColorRight color={types.electic}/>
                <S.ColorLeft color={types.dark}/>
            </S.Colors>
        </S.Container>
    );
}

export default Pokemon;