import React from 'react'

import MenuItem from './menuItem' 
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='fa fa-dashboard'/>
        <MenuTree label='Catálogo' icon='fa fa-tags'>
            <MenuItem path='#catalogo/categoria' label='Categorias'  icon='fa fa-angle-double-right'/>
            <MenuItem path='#catalogo/tipoOpcao' label='Tipos de Opções'  icon='fa fa-angle-double-right'/>
            <MenuItem path='#catalogo/opcao' label='Opções'  icon='fa fa-angle-double-right'/>
            <MenuItem path='#catalogo/produto' label='Produtos'  icon='fa fa-angle-double-right'/>
        </MenuTree>
    </ul>
)