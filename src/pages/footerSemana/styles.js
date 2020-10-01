import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    background-color:#000;
    display: flex;
    align-items: center;
    height: 50px;
`
export const Seta = styled.a`
    border-radius: 5px;
    display: flex;
    margin-left: 30px;
    height: 25px;
    text-align: center;
    align-items: center;
    background: #000;
    text-decoration:none; 
    border: none;
    &:hover {
    background-color: #655E5F;
}
`
export const PedidosDay = styled.div`
    margin-left: 70px;
    background-color: #FF3D4E;
    display: flex;
    height: 48px;
    width: 200px;
    text-align: center;
`
export const P = styled.p`
    display: flex;
    color: #fff;
    font-size: 18px;
    font-family: 'Fira Code', monospace;
    justify-content: center;
    flex-direction: column;
    flex: 1;
`
export const A = styled.a`
margin-left: 1px;
display: flex;
height: 48px;
width: 230px;
text-align: center;
align-items: center;
background: #000;
border: none;
text-decoration:none; 
&:hover {
    background-color: #F86774;
}
`;