import React from 'react';

import { A ,Footer, Seta, PedidosDay, P} from './styles';

function footerPedidos() {
  return (
    <Footer>
        <Seta >
          <P> {"<--"} </P>
        </Seta>
        <PedidosDay>
          <P>PEDIDOS DO MÊS</P>
        </PedidosDay>
        <A href="pedidosdia">
          
          <P>PEDIDOS DO DIA</P>
        </A >
        <A href="pedidossemana">
          
          <P>PEDIDOS DA SEMANA</P>
        </A >
        <A href="todospedidos">
          
          <P>TODOS OS PEDIDOS</P>
        </A >

  </Footer>
  )
}

export default footerPedidos;