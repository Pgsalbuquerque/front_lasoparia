import styled, { keyframes, css,createGlobalStyle} from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export default createGlobalStyle`
    body {
        background: #FF3D4E;
    }
`

export const DivInput = styled.div`
    height: 45px;
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    

`

export const P = styled.p`
    font-size: 15px;
    color: #fff;
    margin-left: 5px;
`

export const P1 = styled.p`
    font-size: 13px;
    color: #fff;
`

export const InputBox = styled.input`
    
`

export const Input = styled.input`
    height: 25px;
    width: 280px;
    border: 5px solid;
    border-color: #fff;
    border-radius: 5px;
    &::placeholder {
        color: #000;
        opacity: 1;
        margin-left: 10px;
    }    
`

export const H1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    width: 400px;
    color: #fff;
    margin-bottom: 10px;
`

export const H1S = styled.h1`
    height: 20px; 
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 400px;
    color: #fff;
    margin-bottom: 10px;
`


export const DivButton = styled.div`
    margin-top: 10px;
    height: 40px;
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Button = styled.button.attrs(props => ({
    disabled: props.loading,
})
)`
    
    height: 40px;
    width: 100px;
    background: #000;
    border: none;
    border-radius: 5px;
    color: #fff;

    &:hover {
        background: #474040;
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props => props.loading && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
`


