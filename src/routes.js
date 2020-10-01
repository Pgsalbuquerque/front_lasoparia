import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PedidosDia from './pages/Pedidosdia/index'
import PedidosSemana from './pages/PedidosSemana/index'
import PedidosMes from './pages/PedidosMes/index'
import PedidosAll from './pages/PedidosAll/index'
import FazerPedidos from './pages/FazerPedidos/index'

export default function Router (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/fazerpedidos" component={FazerPedidos} />
                <Route path="/pedidosdia" component={PedidosDia} />
                <Route path="/pedidossemana" component={PedidosSemana} />
                <Route path="/pedidosmes" component={PedidosMes} />
                <Route path="/todospedidos" component={PedidosAll} />
            </Switch>
        </BrowserRouter>
    )
}