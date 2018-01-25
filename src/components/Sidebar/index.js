import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import { SiderStyled, Logo } from './css';

class Sidebar extends Component {
    render() {
        return (
            <SiderStyled
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <Logo />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </SiderStyled>
        );
    }
}

export default Sidebar;
