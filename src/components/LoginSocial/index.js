import React, { Component } from 'react';
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import Auth from 'components/Auth';

const auth = new Auth();

class LoginSocial extends Component {
    onHandleClick ( social ) {
        auth.auth0.authorize({
            connection: social
        });
    }

    render() {
        return (
            <div>
                <FacebookLoginButton text="Login with Facebook" onClick={ () => this.onHandleClick('facebook') }/>
                <GithubLoginButton text="Login with Github" onClick={ () => this.onHandleClick('github') } />
                <GoogleLoginButton text="Login with Google" onClick={ () => this.onHandleClick('google-oauth2') } />
            </div>
        );
    }
}

export default LoginSocial;
