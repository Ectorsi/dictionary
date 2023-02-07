import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    max-width: 270px;
    height: 70px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;

export const Label = styled.label`
    color: gray;
    margin-right: 10px;
`;

export const Input = styled.input`
    padding-left: 5px;
`;