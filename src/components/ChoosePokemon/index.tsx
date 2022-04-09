import * as S from './styles';

import Pokemon from '../Pokemon';

function ChoosePokemon() 
{
    return (
        <S.Container>
            <S.Text>
                Choose 6 Pokémons:
            </S.Text>

            <S.PokeList>
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
                <Pokemon />
            </S.PokeList>
        </S.Container>
    );
}

export default ChoosePokemon;