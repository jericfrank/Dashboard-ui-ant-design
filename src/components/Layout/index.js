import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from 'components/Layout/Header';
import Sidebar from 'components/Layout/Sidebar';

import { ContentStyled } from './css';

class LayoutWrapper extends Component {
    state = {
        collapsed : false
    };

    toggle = () => {
        this.setState({
            collapsed : !this.state.collapsed
        });
    }

    render() {
        return (
            <Layout>
                <Sidebar collapsed={this.state.collapsed}/>
                <Layout>
                    <Header collapsed={this.state.collapsed} toggle={this.toggle}/>
                    <ContentStyled>
                        { this.props.children }
                    </ContentStyled>
                </Layout>
            </Layout>
        );
    }
}

export default LayoutWrapper;
