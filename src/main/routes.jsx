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
        <Route path='catalogo/categoria' component={Categoria} />
        <Route path='catalogo/tipoOpcao' component={TipoOpcao} />
        <Route path='catalogo/opcao' component={Opcao} />
        <Route path='catalogo/produto' component={Produto} />
        <Redirect from='*' to='/' />
    </Router>
)