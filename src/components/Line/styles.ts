import styled from 'styled-components';
import { IStyledProps } from './types';

export const Container = styled.div<IStyledProps>`
    width: 300px;
    height: 1px;

    background-color: ${
        (props) => props.colorType
    };
`;

