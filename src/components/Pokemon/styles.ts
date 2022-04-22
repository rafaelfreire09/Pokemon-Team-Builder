import styled from 'styled-components';

import { IColorType } from '../../types/color';
import { IStyledProps } from './types';

export const Container = styled.div`
    width: 55px;
    height: 72px;

    margin: 7px 9px 10px 9px;
`;

export const Icon = styled.div<IStyledProps>`
    display: ${
        ({ setDisplay }) => setDisplay
    };
    opacity: 80%;

    position: relative;

    margin-top: 15px;
    margin-left: -5px;

    margin-bottom: -55px;
`;

export const Id = styled.div`
    background-color: #90ADC6;
    width: 18px;
    height: 18px;
    position: relative;
    border-radius: 50%;

    margin-bottom: -15px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const NumberId = styled.div`
    color: #ffffff;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 9px;
`;

export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;

    margin-top: 10px;

    width: 45px;
    height: 45px;

    cursor: pointer;
`;

export const Name = styled.div`
    font-style: normal;
    font-size: 10px;
    font-weight: 600;

    text-align: center;
    text-transform: capitalize;
`;

export const Colors = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 7px;
`;

export const ColorRight = styled.div<IColorType>`
    width: 48%;
    height: 2px;
    background-color: ${
        ({ color }) => color
    };
`;

export const ColorLeft = styled.div<IColorType>`
    width: 48%;
    height: 2px;
    background-color: ${
        ({ color }) => color
    };
`;