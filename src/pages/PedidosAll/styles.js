import styled from 'styled-components';

export const Pedidos = styled.div`
    background-color: #FF3D4E;
    border-radius: 5px;
    text-align: center;
    flex-direction: column;
    border: 2px solid rgb(0,0,0);
` 
    
  
export const PedidosText = styled.div`
    text-align: center;
    font-size: large;
    margin-top: 20px;
    color: #000;

`

export const GridPedidos = styled.div`

    margin-top: 30px;
    display: grid;
    grid-template-columns: 300px 300px 300px 300PX;
    grid-template-rows: 1fr;
    grid-row-gap: 5px;
    grid-column-gap: 0px;
    justify-content: space-evenly;
    align-content: space-evenly;
`

export const P = styled.p `
    margin-top: 10px;
    font-size: 15px;
    color: #DDDCE0;
    font-family: 'Fira Code', monospace;
    height: 20px;
    margin-bottom: 10px;
`