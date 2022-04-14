import { Link } from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';
import MyTeam from '../../components/MyTeam';
import Line from '../../components/Line';

const data = [
    {
        name: "Time dos sonhos",
        pokemons: [
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                type1: "grass",
                type2: "poison",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
                type1: "fire",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
                type1: "bug",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
                type1: "water",
                type2: "",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
                type1: "normal",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
                type1: "bug",
                type2: "",
            },
        ]
    },
    {
        name: "Time reserva",
        pokemons: [
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
                type1: "dark",
                type2: "dragon",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png",
                type1: "fighting",
                type2: "AD6EEC",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
                type1: "electic",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png",
                type1: "steel",
                type2: "psychic",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png",
                type1: "ground",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png",
                type1: "bug",
                type2: "poison",
            },
        ]
    },
    {
        name: "Time de teste",
        pokemons: [
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/78.png",
                type1: "ice",
                type2: "normal",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png",
                type1: "ground",
                type2: "fire",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/98.png",
                type1: "bug",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png",
                type1: "fairy",
                type2: "dark",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
                type1: "normal",
                type2: "fighting",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/89.png",
                type1: "grass",
                type2: "psychic",
            },
        ]
    },
    {
        name: "Time de teste 2",
        pokemons: [
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png",
                type1: "grass",
                type2: "poison",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/72.png",
                type1: "water",
                type2: "steel",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/100.png",
                type1: "bug",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
                type1: "dragon",
                type2: "fire",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
                type1: "normal",
                type2: "flying",
            },
            {
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
                type1: "bug",
                type2: "poison",
            },
        ]
    },
]

function Teams() 
{
    return (
        <S.Container>
            <Link to="/create-new-team" style={{ textDecoration: 'none' }}>
                <Header>
                    CREATE NEW TEAM
                </Header>
            </Link>

            <S.TeamsSection>
                {
                    data.map((element, index) => {
                        return (
                            <S.SingleTeam key={index}>
                                <MyTeam team={element} />
                                <S.LinePosition>
                                    <Line color='#333652'/>
                                </S.LinePosition>
                            </S.SingleTeam>
                        )
                    })
                }
            </S.TeamsSection>
        </S.Container>
    );
}

export default Teams;