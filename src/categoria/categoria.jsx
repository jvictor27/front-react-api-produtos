import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Categoria extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Categorias" subTitle='do catálogo' />
                <Content>
                    Seção
                </Content>
            </div>
        )
    }
}

export default Categoria