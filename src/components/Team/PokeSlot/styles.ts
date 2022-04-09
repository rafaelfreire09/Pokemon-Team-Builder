import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px 0px 10px 30px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

export const Division = styled.div`
    width: 68px;
`;

export const DivisionLine = styled.div`
    background-color: #E5E5E5;
    width: 68px;
    height: 10px;

    position: absolute;
`;

export const DivisionCircle = styled.div`
    background-color: #E5E5E5;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    position: absolute;
`;

export const BallTop = styled.div`
    background-color: #ffffff;
    display: inline-block;

    height: 31px;
    width: 68px;

    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
`;

export const BallBottom = styled.div`
    background-color: #ffffff;
    display: inline-block;

    height: 31px;
    width: 68px;

    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
`;