import React from 'react'

import MenuItem from './menuItem' 
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='fa fa-dashboard'/>
        <MenuTree label='Catálogo' icon='fa fa-tags'>
            <MenuItem path='#categorias' label='Categorias'  icon='fa fa-angle-double-right'/>
            <MenuItem path='#tiposOpcoes' label='Tipos de Opções'  icon='fa fa-angle-double-right'/>
            <MenuItem path='#opcoes' label='Opções'  icon='fa fa-angle-double-right'/>
            <MenuItem path='#produtos' label='Produtos'  icon='fa fa-angle-double-right'/>
        </MenuTree>
    </ul>
)