import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboards'
import Categoria from '../categoria/categorias'
import TipoOpcao from '../tipoOpcao/tiposOpcoes'
import Opcao from '../opcao/opcoes'
import Produto from '../produto/produtos'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/categorias' component={Categoria} />
        <Route path='/tiposOpcoes' component={TipoOpcao} />
        <Route path='/opcoes' component={Opcao} />
        <Route path='/produtos' component={Produto} />
        <Redirect from='*' to='/' />
    </Router>
)