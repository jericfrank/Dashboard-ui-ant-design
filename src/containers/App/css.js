import styled from 'styled-components';

import { Layout } from 'antd';

const { Content } = Layout;

export const AppWrapper = styled( Layout )`
    margin-left : ${ props => props.margin };
    min-height  : 100vh;
`;

export const ContentWrapper = styled( Content )`
    margin     : 24px 16px !important;
    padding    : 24px !important;
    background : #fff !important;
    overflow   : initial !important;
`;
