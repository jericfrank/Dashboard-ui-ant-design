import React, { Component } from 'react';
import LoginForm from 'components/LoginForm';

import { LoginPageWrapper } from './css';

class LoginPage extends Component {
    render() {
        return (
            <LoginPageWrapper>
                <LoginForm />
            </LoginPageWrapper>
        );
    }
}

export default LoginPage;
