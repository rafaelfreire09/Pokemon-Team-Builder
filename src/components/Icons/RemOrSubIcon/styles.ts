import styled from 'styled-components';
import { IProps } from './types';

export const Container = styled.div<IProps>`
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

    cursor: ${
        ({ cursor }) => cursor
    };
`;

export const IconType = styled.img``;