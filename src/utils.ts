// Receives a type and returns the hexadecimal code of the color
export function getColor(type: string | undefined): string
{
    let color = '';

    for (let i = 1; i <= Object.keys(colorTypes).length; i++)
    {
        if (colorTypes[i].name === type)
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

// Receives a hexadecimal code  and returns the name
export function getName(color: string | undefined): string
{
    let name = '';

    for (let i = 1; i <= Object.keys(colorTypes).length; i++)
    {
        if (colorTypes[i].color === color)
        {
            name = colorTypes[i].name;
        }
    }

    if (name)
    {
        return name;
    } else 
    {
        return name = '#ffffff';
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
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        name: "bulbasaur",
        type1: "grass",
        type2: "poison"
    },
    {
        id: 4,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        name: "charmander",
        type1: "fire",
        type2: ""
    },
    {
        id: 7,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        name: "squirtle",
        type1: "water",
        type2: ""
    },
    {
        id: 10,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        name: "caterpie",
        type1: "bug",
        type2: ""
    },
    {
        id: 13,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        name: "weedle",
        type1: "bug",
        type2: "poison"
    },
    {
        id: 16,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
        name: "pidgey",
        type1: "normal",
        type2: "flying"
    },
    {
        id: 19,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        name: "rattata",
        type1: "normal",
        type2: ""
    },
    {
        id: 22,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
        name: "fearow",
        type1: "normal",
        type2: "flying"
    },
    {
        id: 25,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        name: "pikachu",
        type1: "electric",
        type2: ""
    },
    {
        id: 28,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
        name: "sandslash",
        type1: "ground",
        type2: ""
    },
    {
        id: 31,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
        name: "nidoqueen",
        type1: "poison",
        type2: "ground",
    },
    {
        id: 34,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
        name: "nidoking",
        type1: "poison",
        type2: "ground",
    },
    {
        id: 37,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
        name: "vulpix",
        type1: "fire",
        type2: ""
    },
    {
        id: 40,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
        name: "wigglytuff",
        type1: "normal",
        type2: "fairy"
    },
    {
        id: 43,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
        name: "oddish",
        type1: "grass",
        type2: "poison"
    },
    {
        id: 46,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
        name: "paras",
        type1: "bug",
        type2: "grass"
    },
    {
        id: 49,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
        name: "venomoth",
        type1: "bug",
        type2: "poison"
    },
    {
        id: 52,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
        name: "meowth",
        type1: "normal",
        type2: ""
    },
    {
        id: 55,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
        name: "golduck",
        type1: "water",
        type2: ""
    },
    {
        id: 58,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
        name: "growlithe",
        type1: "fire",
        type2: ""
    },
]