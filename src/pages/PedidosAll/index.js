import React, { Component } from 'react';
import '../../App.css'


import api from '../../api';


import Footer from "../footerAll/index"

import {Pedidos, PedidosText, GridPedidos, P} from './styles'

class App extends Component {

    state = {
      pedidos: [],
    }
  
    async componentDidMount(){
      const response = await api.get('/pedidosall')
  
      this.setState({ pedidos: response.data})
    }
  
    render(){
      return(
        <>
          < Footer />
          <div >
            <PedidosText>
              <h2>LISTAGEM DE PEDIDOS</h2>
            </PedidosText>
            <GridPedidos>
            {this.state.pedidos.reverse().map(pedido => (
              <Pedidos>
                <PedidosText> 
                  <P>PEDIDO {pedido.id}</P>
                </PedidosText>
                  <P>SOPAS: {pedido.sopas.replaceAll(',', ' ').toUpperCase()}</P>
                  <P>VALOR: {pedido.value}</P>
                  <P>DATA: {pedido.created_at.toUpperCase()}</P>
                  <P>PAGAMENTO: {pedido.pagamento.toUpperCase()}</P>
                  <P>RUA: {pedido.rua.toUpperCase()}</P>
                  <P>BAIRRO: {pedido.bairro.toUpperCase()}</P>
                  <P>NUMERO: {pedido.numero.toUpperCase()}</P>
                  {pedido.referencia != null ? <P>REFERÊNCIA: {pedido.referencia.toUpperCase()}</P> : <P>SEM REFERÊNCIA</P>}
              </Pedidos>
            ))}
            </GridPedidos>
          </div>
        </>
      )
    }
  }
  
  export default App;