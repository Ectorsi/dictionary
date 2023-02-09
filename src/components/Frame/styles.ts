import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    height: 100%;


    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: space-around; */
`;

export const H1 = styled.h1`
    color: maroon;
`;

export const Paragraph = styled.p`
    max-width: 500px;
    font-size: 12px;
    text-align: justify;

    background-color: #eee;
    padding: 10px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Phonetic = styled.span`
    background-color: maroon;
    color: #eee;
    padding: 2px 4px;
    border-radius: 2px;

    font-weight: 500;
    margin-bottom: 5px;
`;