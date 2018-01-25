import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { SiderStyled, Logo } from './css';

class Sidebar extends Component {
    constructor ( props ) {
        super( props );

        this.renderNav = this.renderNav.bind( this );
    }

    renderNav ( nav, index ) {
        return (
            <Menu.Item key={nav.path}>
                <Link to={nav.path}>
                    <Icon type={nav.icon} />
                    <span>{nav.name}</span>
                </Link>
            </Menu.Item>
        );
    }

    render() {
        return (
            <SiderStyled
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <Logo />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[ this.props.location.pathname ]}>
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
