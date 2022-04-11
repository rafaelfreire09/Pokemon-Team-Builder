import styled from 'styled-components';

import { ColorType } from '../../types/color';

export const Container = styled.div`
    width: 60px;
    height: 75px;

    margin: 7px;
`;

export const Id = styled.div`
    background-color: #90ADC6;
    width: 18px;
    height: 18px;
    position: absolute;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const NumberId = styled.div`
    color: #ffffff;

    font-style: normal;
    font-weight: 700;
    font-size: 9px;
`;

export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;

    width: 49px;
    height: 49px;

    cursor: pointer;

    .dragging{
        filter: opacity(50%);
    }
`;

export const Name = styled.div`
    font-size: 10px;
    font-weight: 700;
    text-align: center;
`;

export const Colors = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 7px;
`;

export const ColorRight = styled.div<ColorType>`
    width: 48%;
    height: 2px;
    background-color: ${
        ({ color }) => color
    };
`;

export const ColorLeft = styled.div<ColorType>`
    width: 48%;
    height: 2px;
    background-color: ${
        ({ color }) => color
    };
`;