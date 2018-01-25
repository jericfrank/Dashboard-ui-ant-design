import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { SIDEBAR_NAVS } from './constants';
import { ContentWrapper, AppWrapper } from './css';

class App extends Component {
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
            <AppWrapper margin={this.state.collapsed ? '80px' : '200px'}>
                <Sidebar {...this.props} collapsed={this.state.collapsed} navs={SIDEBAR_NAVS}/>
                <Layout>
                    <Header collapsed={this.state.collapsed} toggle={this.toggle}/>
                    <ContentWrapper>
                        { this.props.children }
                    </ContentWrapper>
                </Layout>
            </AppWrapper>
        );
    }
}

export default App;
