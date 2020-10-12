import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Categoria from '../categoria/categoria'
import TipoOpcao from '../tipoOpcao/tipoOpcao'
import Opcao from '../opcao/opcao'
import Produto from '../produto/produto'

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