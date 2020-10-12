import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" subTitle='Versão 1.0' />
                <Content>
                    <ValueBox cols='12,4' color='white' icon='fa fa-credit-card'
                        value='R$2000' text='Total investido' />
                    <ValueBox cols='12,4' color='blue' icon='fa fa-money'
                        value='R$5000' text='Total de vendas' />
                    <ValueBox cols='12,4' color='green' icon='fa fa-bank'
                        value='R$3000' text='Total de lucro' />     
                </Content>
            </div>
        )
    }
}

export default Dashboard