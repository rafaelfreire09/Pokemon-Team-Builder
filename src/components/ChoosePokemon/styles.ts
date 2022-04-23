import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    height: 395px;

    margin-top: 40px;
`;

export const Text = styled.div`
    color: #333652;
    
    font-style: normal;
    font-weight: 800;
    font-size: 13px;

    margin-bottom: 10px;
`;

export const Pokemons_Section = styled.div`
    max-height: 378px;

    overflow-x: hidden;
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

export const Pokemon_List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    margin: 0px 7px 10px 7px;
`;

export const Loading_Message = styled.div`
    color: #333652;
    text-align: center;

    margin-top: 30px;
    font-weight: 700;
    font-size: 15px;
`;