import React from 'react'

export default props => (
    <header className='main-header'>
        <a href='/#/' className="logo">
            <span className="logo-mini"><b>Ges</b>P</span>
            <span className='logo-lg'>
                <i className='fa fa-list-alt'></i>
                <b>Gestor</b> de Produtos
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)