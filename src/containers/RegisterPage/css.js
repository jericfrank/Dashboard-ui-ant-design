import styled from 'styled-components';
import { Form } from 'antd';

export const AuthWrapper = styled.div`
	display          : flex;
	flex-direction   : column;
	min-height       : 100vh;
	align-items      : center;
	justify-content  : center;
	background-color : #273135;

    .back-icon {
        margin-right   : 252px;
        padding-bottom : 10px;
    }
`;

export const AuthForm = styled( Form )`
	width         : 340px !important;
	margin        : 0 !important;
	padding       : 3em 2em 2em 2em !important;
	color         : rgba(0, 0, 0, 0.870588) !important;
	background    : #fafafa !important;
	border        : 1px solid #273135 !important;
	border-radius : 3px !important;

	.login-form-button {
		width: 100%;
	}
`;
