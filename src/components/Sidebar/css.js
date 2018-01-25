import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

export const SiderStyled = styled( Sider )`
    min-height : 100vh;
    overflow   : auto !important;
    position   : fixed !important;
    left       : 0 !important;
`;

export const Logo = styled.div`
    height     : 32px;
    background : rgba(255,255,255,.2);
    margin     : 16px;
`;
