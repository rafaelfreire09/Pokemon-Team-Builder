import styled from 'styled-components';

import { ColorType } from '../../../types/color';

export const Container = styled.div<ColorType>`
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

    filter: opacity(40%);
`;

export const IconType = styled.img``;