import React from 'react';

import {Footer, Seta, PedidosDay, P, A} from './styles';

function footerPedidos() {
  return (
    <Footer>
        <Seta>
        <P> {"<--"} </P>
        </Seta>
        <PedidosDay>
          <P>TODOS OS PEDIDOS</P>
        </PedidosDay>
        <A href ="/pedidosdia">
          
          <P>PEDIDOS DO DIA</P>
        </A>
        <A href ="/pedidossemana">
          
          <P>PEDIDOS DA SEMANA</P>
        </A>
        <A href ="/pedidosmes">
          
          <P>PEDIDOS DO MÊS</P>
        </A>

  </Footer>
  )
}

export default footerPedidos;