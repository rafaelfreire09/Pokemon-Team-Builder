import styled from 'styled-components';

export const Container = styled.div``;

export const Message = styled.div`
    color: #333652;
    text-align: center;

    margin-top: 20px;
    font-weight: 700;
    font-size: 15px;
`;

export const TeamsSection = styled.div`
    width: 345px;
    height: 700px;

    padding: 0px 5px 0px 5px;
    margin: auto;

    max-height: 700px;

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
        border-radius: 20px;
    }
`;

export const SingleTeam = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    //margin-top: -10px;
    //margin-bottom: 5px;
`;

export const LinePosition = styled.div`
    margin: 5px 0px 12px 0px;
`;