import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    height: 395px;

    margin: 35px 40px 13px 15px;
`;

export const Text = styled.div`
    margin-left: 10px;

    color: #333652;
    
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
`;

export const PokeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    margin-left: 20px;
    margin-top: 20px;

    max-height: 350px;

    overflow-x: hidden;
    overflow-y: scroll;
`;