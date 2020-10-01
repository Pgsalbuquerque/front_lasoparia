import React from 'react';

import { A ,Footer, Seta, PedidosDay, P} from './styles';

function footerPedidos() {
  return (
    <Footer>
        <Seta>
        <P> {"<--"} </P>
        </Seta>
        <PedidosDay>
          <P>PEDIDOS DA SEMANA</P>
        </PedidosDay>
        <A href="pedidosdia">
          
          <P>PEDIDOS DO DIA</P>
        </A >
        <A href="pedidosmes">
          
          <P>PEDIDOS DO MÊS</P>
        </A >
        <A href="todospedidos">
          
          <P>TODOS OS PEDIDOS</P>
        </A >

  </Footer>
  )
}

export default footerPedidos;