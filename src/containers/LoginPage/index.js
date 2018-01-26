import React, { Component } from 'react';
import auth0 from 'auth0-js';

import LoginForm from 'components/LoginForm';
import variables from 'variables';

import { LoginPageWrapper } from './css';

const { AUTH_CONFIG } = variables;

const webAuth = new auth0.WebAuth({
    domain       : AUTH_CONFIG.domain,
    clientID     : AUTH_CONFIG.clientId,
    redirectUri  : AUTH_CONFIG.callbackUrl,
    audience     : `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType : 'token id_token',
    scope        : 'openid profile email'
});

class LoginPage extends Component {
    state = {
        error : ''
    };

    handleFormSubmit = ( err, values ) => {
        if ( !err ) {
            webAuth.redirect.loginWithCredentials({
                connection: 'Username-Password-Authentication',
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
