import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Opcao extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Opções" subTitle='do catálogo' />
                <Content>
                    Seção
                </Content>
            </div>
        )
    }
}

export default Opcao