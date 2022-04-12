import styled from 'styled-components';

interface Opacity
{
    color: string
    opacityLevel: string
}

export const Container = styled.div<Opacity>`
    margin-left: 15px;

    width: 40px;
    height: 40px;
    background-color: ${
        ({ color }) => color
    };
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    filter: ${
        ({ opacityLevel }) => opacityLevel
    };
`;

export const IconType = styled.img``;