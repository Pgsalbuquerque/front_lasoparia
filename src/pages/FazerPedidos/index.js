import React, { Component } from 'react'

import { FaSpinner } from 'react-icons/fa'

import Global, {H1S,P,P1,InputBox,DivInput,DivButton,Button,Container, Form, Input, H1} from './styles'

import api from '../../api'

export default class FazerPedido extends Component {
    state = {
        sopas: "",
        cartao: "",
        dinheiro: "",
        rua: "",
        bairro: "",
        numero: "",
        referencia: "",
        loading: false,
        realizado: "",

    }

    Sopas = e => {
        this.setState({ sopas: e.target.value })
    }
    Rua = e => {
        this.setState({ rua: e.target.value })
    }
    Bairro = e => {
        this.setState({ bairro: e.target.value })
    }
    Numero = e => {
        this.setState({ numero: e.target.value })
    }
    Referencia = e => {
        this.setState({ referencia: e.target.value })
    }
    Cartao = e => {
        this.setState({ cartao: e.target.value })
    }
    Dinheiro = e => {
        this.setState({ dinheiro: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()

        this.setState({loading: true})

        const {sopas, cartao, dinheiro, rua, bairro, numero, referencia} = this.state;
        let pagamento = "";
        if (cartao == "" && dinheiro == ""){
            pagamento = "dinheiro";
        } else if (pagamento == "") {
            pagamento = "cartao"
        }else if (cartao == "") {
            pagamento = "dinheiro";
        } else { pagamento = "dinheiro" + "," + "cartão" }
        const data = {
            sopas,
            pagamento,
            rua,
            bairro,
            numero,
            referencia,
            
        }

        api.post('/fazerpedido', data) .then(
            response => {
                this.setState({loading: false, realizado: "Pedido realizado com sucesso!"})
            }
            )
        .catch(err => {
            this.setState({loading: false, realizado: err.message})
           }
            )
        
    }

    render() {
        const {realizado,sopas, cartao, dinheiro, rua, bairro, numero, referencia, loading} = this.state


        return (
            <>
                <Global/>
                <Container>
                    <H1>
                        Faça seu pedido
                    </H1>
                <Form onSubmit={this.handleSubmit}>
                    <DivInput>
                        <P>SOPAS</P>
                        <Input value={sopas} 
                        onChange={this.Sopas}
                        type="text" />
                    </DivInput>
                    <DivInput>
                        <P>PAGAMENTO</P>
                        <P1>CARTÃO</P1>
                        <InputBox value={cartao} 
                        onChange={this.Cartao}
                        type="checkbox" value="Cartão"/>
                        <P1>DINHEIRO</P1>
                        <InputBox value={dinheiro} 
                        onChange={this.Dinheiro}
                        type="checkbox" value="Dinheiro"/>
                    </DivInput>
                    <DivInput>
                        <P>RUA</P>
                        <Input  value={rua} 
                        onChange={this.Rua}
                        type="text" />
                        
                    </DivInput>
                    <DivInput>
                        <P>BAIRRO</P>
                        <Input  value={bairro} 
                        onChange={this.Bairro}
                        type="text" />
                        
                    </DivInput>
                    <DivInput>
                        <P>NÚMERO</P>
                        <Input value={numero} 
                        onChange={this.Numero}
                        type="text" />
                        
                    </DivInput>
                    <DivInput>
                        
                        <P>REFERÊNCIA</P>
                        <Input value={referencia} 
                        onChange = {this.Referencia}
                        type="text" />
                    </DivInput>
                    <DivButton>
                        <Button type="submit" loading={loading}>
                            {loading ? <FaSpinner color="#fff" size={16}/> : "ENVIAR"}
                        </Button>

                    </DivButton>
                    <H1S>{realizado}</H1S>
                </Form>
                </Container>
            </>
    
        )
    }
}
