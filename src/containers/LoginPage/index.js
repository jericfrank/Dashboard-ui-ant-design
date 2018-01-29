import React, { Component } from 'react';

import Auth from 'components/Auth';
import LoginForm from 'components/LoginForm';

import { LoginPageWrapper } from './css';

const auth = new Auth();

class LoginPage extends Component {
    state = {
        error : ''
    };

    handleFormSubmit = ( err, values ) => {
        if ( !err ) {
            auth.auth0.redirect.loginWithCredentials({
                connection: process.env.REACT_APP_AUTH0_CONNECTION,
                username: values.userName,
                password: values.password,
                scope: 'openid'
            }, ( err ) => {
                if ( err ) {
                    this.setState({ error : err.error_description })
                }
            });
        }
    }

    render() {
        return (
            <LoginPageWrapper>
                <LoginForm onFormSubmit={this.handleFormSubmit} error={this.state.error}/>
            </LoginPageWrapper>
        );
    }
}

export default LoginPage;
