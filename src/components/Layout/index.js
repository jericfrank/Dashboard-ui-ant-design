import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from 'components/Layout/Header';
import Sidebar from 'components/Layout/Sidebar';

import { ContentStyled, LayoutStyled } from './css';

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
            <LayoutStyled margin={this.state.collapsed ? '80px' : '200px'}>
                <Sidebar collapsed={this.state.collapsed}/>
                <Layout>
                    <Header collapsed={this.state.collapsed} toggle={this.toggle}/>
                    <ContentStyled>
                        { this.props.children }
                    </ContentStyled>
                </Layout>
            </LayoutStyled>
        );
    }
}

export default LayoutWrapper;
