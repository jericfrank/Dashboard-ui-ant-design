import styled from 'styled-components';

import { Layout } from 'antd';

const { Content } = Layout;

export const LayoutStyled = styled( Layout )`
    margin-left : ${ props => props.margin };
    min-height  : 100vh;
`;

export const ContentStyled = styled( Content )`
    margin     : 24px 16px !important;
    padding    : 24px !important;
    background : #fff !important;
    overflow   : initial !important;
`;
