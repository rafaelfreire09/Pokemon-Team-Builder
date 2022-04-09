import styled from 'styled-components';

interface ColorType
{
    colorType: string;
}

export const Container = styled.div<ColorType>`
    width: 300px;
    height: 1px;

    background-color: ${
        (props) => props.colorType
    };
`;

