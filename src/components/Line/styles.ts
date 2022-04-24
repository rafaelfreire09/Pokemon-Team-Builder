import styled from 'styled-components';
import { StyledProps } from './types';

export const Container = styled.div<StyledProps>`
    width: 300px;
    height: 1px;

    background-color: ${
        (props) => props.colorType
    };
`;

