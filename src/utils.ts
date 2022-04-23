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

interface IColor
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