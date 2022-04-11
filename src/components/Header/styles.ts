import styled from 'styled-components';

export const Container = styled.div`
    width: 375px;
    height: 46px;

    background-color: #90ADC6;
    //border-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 64px;

    cursor: pointer;
`;

export const Text = styled.div`
    color: #ffffff;

    font-weight: 800;
    font-style: normal;
    font-size: 18px;
    line-height: 30px;
`;