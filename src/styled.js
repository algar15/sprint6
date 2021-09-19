import styled from 'styled-components';


export const Cuadrado = styled.div`
    width: calc(100% - 20px);
    border: 2px solid black;
    border-radius: 50px;
    padding: 1px 0 2px 0;
    text-align: center;
    margin: 10px 0 10px 0;
`;

export const SelectedTextBtn = styled.button`
    display: flex;
    flex-grow: 1;
    padding: 3px;
    min-height: 40px;
    justify-content: center;
    align-items: center;
`;