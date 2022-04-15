// Receives a type and returns the hexadecimal code of the color
export function getColor(type: string | undefined): string
{
    let color = '';

    for (let i = 1; i <= Object.keys(colorTypes).length; i++)
    {
        if (colorTypes[i].name == type)
        {
            color = colorTypes[i].color;
        }
    }

    if (color)
    {
        return color;
    } else 
    {
        return color = '#ffffff';
    }        
}

export interface IColor
{
    [id: number]: {
        name: string,
        color: string,
    }
}

export const colorTypes: IColor = 
{
    1: {
        name: 'bug',
        color: '#89960B',
    },
    2: {
        name: 'dark',
        color: '#322C26',
    },
    3: {
        name: 'dragon',
        color: '#6B57D2',
    },
    4: {
        name: 'fairy',
        color: '#DA93DD',
    },
    5: {
        name: 'fighting',
        color: '#80311D',
    },
    6: {
        name: 'fire',
        color: '#EC5D35',
    },
    7: {
        name: 'ghost',
        color: '#AD6EEC',
    },
    8: {
        name: 'grass',
        color: '#68BB2B',
    },
    9: {
        name: 'ground',
        color: '#D0B155',
    },
    10: {
        name: 'normal',
        color: '#C3C0B8',
    },
    11: {
        name: 'poison',
        color: '#924694',
    },
    12: {
        name: 'psychic',
        color: '#DA3063',
    },
    13: {
        name: 'steel',
        color: '#8F8E9E',
    },
    14: {
        name: 'water',
        color: '#5CC1ED',
    },
    15: {
        name: 'electic',
        color: '#F4CB38',
    },
    16: {
        name: 'ice',
        color: '#9BDEFB',
    },
    17: {
        name: 'flying',
        color: '#5D74D5',
    },
    18: {
        name: 'rock',
        color: '#9D853C',
    }
};

export const teamsData = [
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

export const pokemonData = 
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
    {
        id: 17,
        name: "pidgeotto",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
        type1: "normal",
        type2: "flying",
    },
]