import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    height: 395px;

    margin: 35px 13px 13px 15px;
`;

export const Text = styled.div`
    //margin-left: 10px;

    color: #333652;
    
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
`;

export const PokeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin: 10px;

    max-height: 350px;

    //overflow-x: hidden;
    overflow-y: scroll;

    scrollbar-width: thin;
    scrollbar-color: #C4C4C4 transparent;

    &::-webkit-scrollbar{
        width: 5px; 
    }

    &::-webkit-scrollbar-track{
        background: transparent;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #C4C4C4;
        border-radius: 25px;
    }
`;