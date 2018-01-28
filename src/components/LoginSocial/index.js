import React, { Component } from 'react';
import { Icon, Button } from 'antd';

import Auth from 'components/Auth';

const auth = new Auth();

class LoginSocial extends Component {
    onHandleClick ( e ) {
        auth.auth0.authorize({
            connection: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.onHandleClick.bind( this )} value="facebook" type="primary" className="login-form-button">
                    <Icon type="facebook" /> Login with Facebook
                </Button>
                <Button onClick={this.onHandleClick.bind( this )} value="github" type="primary" className="login-form-button">
                    <Icon type="github" /> Login with Github
                </Button>
                <Button onClick={this.onHandleClick.bind( this )} value="google-oauth2" type="primary" className="login-form-button">
                    <Icon type="google" /> Login with Google
                </Button>
            </div>
        );
    }
}

export default LoginSocial;
