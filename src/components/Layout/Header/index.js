import React from 'react';
import { Icon } from 'antd';

import { StyledHeader } from './css';

function HeaderWrapper ( props ) {
    return (
        <StyledHeader>
            <Icon
                className="trigger"
                type={ props.collapsed ? 'menu-unfold' : 'menu-fold' }
                onClick={ props.toggle }
            />
        </StyledHeader>
    )
}

export default HeaderWrapper;
