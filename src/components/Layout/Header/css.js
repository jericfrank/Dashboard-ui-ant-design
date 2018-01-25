import styled from 'styled-components';

import { Layout } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
    background : #fff !important;
    padding    : 0 !important;

    .trigger {
        font-size   : 18px;
        line-height : 64px;
        padding     : 0 24px;
        cursor      : pointer;
        transition  : color .3s;
    }

    .trigger:hover {
        color : #1890ff;
    }
`;
