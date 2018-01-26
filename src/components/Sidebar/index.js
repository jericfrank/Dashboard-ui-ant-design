import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';

import Auth from 'components/Auth';

import { SiderStyled, Logo } from './css';

const auth = new Auth();

class Sidebar extends Component {
    constructor ( props ) {
        super( props );

        this.renderNav  = this.renderNav.bind( this );
        this.onSelected = this.onSelected.bind( this );
    }

    onSelected ( { key } ) {
        if ( key === '/logout' ) {
            auth.logout( this.props );
        } else {
            this.props.history.push( key );
        }
    }

    renderNav ( nav, index ) {
        return (
            <Menu.Item key={nav.path}>
                <Icon type={nav.icon} />
                <span>{nav.name}</span>
            </Menu.Item>
        );
    }

    render() {
        return (
            <SiderStyled
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
                breakpoint="lg"
                collapsedWidth="80"
                onCollapse={this.props.toggle}
            >
                <Logo />
                <Menu theme="dark" mode="inline" onClick={this.onSelected} defaultSelectedKeys={[ this.props.location.pathname ]}>
                    {this.props.navs.map( this.renderNav )}
                </Menu>
            </SiderStyled>
        );
    }
}

Sidebar.propTypes = {
    collapsed : PropTypes.bool.isRequired,
    navs      : PropTypes.array.isRequired,
    location  : PropTypes.object.isRequired
};

export default Sidebar;
