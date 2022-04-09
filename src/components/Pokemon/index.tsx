import * as S from './styles';

import PokemonImage from '../../assets/pokemon-image.png';

function Pokemon() 
{
    return (
        <S.Container>
            <S.Id>
                <S.NumberId>
                    #1
                </S.NumberId>
            </S.Id>

            <S.Image src={PokemonImage}/>

            <S.Name>
                Bulbasaur
            </S.Name>

            <S.Colors>
                <S.ColorRight />
                <S.ColorLeft />
            </S.Colors>
        </S.Container>
    );
}

export default Pokemon;