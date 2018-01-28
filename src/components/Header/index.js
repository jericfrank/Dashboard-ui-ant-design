import React from 'react';
import { Avatar, Icon } from 'antd';

import { StyledHeader } from './css';

function HeaderWrapper ( props ) {
    return (
        <StyledHeader>
            <Icon
                className="trigger"
                type={ props.collapsed ? 'menu-unfold' : 'menu-fold' }
                onClick={ props.toggle }
            />
            <Avatar className="avatar-img" shape="square" size="large" src={props.avatar} />
        </StyledHeader>
    )
}

export default HeaderWrapper;
