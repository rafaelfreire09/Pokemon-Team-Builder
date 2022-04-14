import styled from 'styled-components';

export const Container = styled.div`
    width: 319px;

    margin: 5px 36px 5px 20px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    
    padding-top: 20px;
`;

export const Focus = styled.input`
    width: 100%;
    height: 100%;

    background-color: #E9EAEC;
`;

export const Input = styled.input`
    color: #333652;

    width: 90px;
    
    font-style: normal;
    font-weight: 800;
    font-size: 13px;

    //border-radius: 0;
    background-color: #E9EAEC;
    //border-bottom: 1px solid #E9EAEC;

    //resize: horizontal;
    border: none;
    appearance: none;
    //box-shadow: none;
    //display: block;
`;

export const Text = styled.div`
    color: #333652;
    
    font-style: normal;
    font-weight: 800;
    font-size: 13px;
`;

export const SlotTop = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SlotBottom = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: end;
`;

export const Icons = styled.div`
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: end;
`;