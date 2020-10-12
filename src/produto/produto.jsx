import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Produto extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Produtos" subTitle='do catálogo' />
                <Content>
                    Seção
                </Content>
            </div>
        )
    }
}

export default Produto