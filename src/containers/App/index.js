import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Auth from 'components/Auth';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { SIDEBAR_NAVS } from './constants';
import { ContentWrapper, AppWrapper } from './css';

const auth = new Auth();

class App extends Component {
    static propTypes = {
        children : PropTypes.node,
        location : PropTypes.object
    };
    
    state = {
        collapsed : false,
        avatar    : null
    };

    toggle = () => {
        this.setState({
            collapsed : !this.state.collapsed
        });
    }

    componentDidMount() {
        auth.userInfo( ( err, value ) => {
            this.setState({ avatar : value.picture });
        } )
    }

    render() {
        return (
            <AppWrapper margin={this.state.collapsed ? '80px' : '200px'}>
                <Sidebar {...this.props} collapsed={this.state.collapsed} toggle={this.toggle} navs={SIDEBAR_NAVS}/>
                <Layout>
                    <Header avatar={this.state.avatar} collapsed={this.state.collapsed} toggle={this.toggle}/>
                    <ContentWrapper>
                        { this.props.children }
                    </ContentWrapper>
                </Layout>
            </AppWrapper>
        );
    }
}

export default App;
