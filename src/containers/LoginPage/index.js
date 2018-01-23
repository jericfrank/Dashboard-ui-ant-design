import React, { Component } from 'react';
import LoginForm from 'components/LoginForm';

import { LoginPageWrapper } from './css';

class LoginPage extends Component {
    handleFormSubmit = ( err, values ) => {
        if ( !err ) {
            console.log( values );
        }
    }

    render() {
        return (
            <LoginPageWrapper>
                <LoginForm onFormSubmit={this.handleFormSubmit}/>
            </LoginPageWrapper>
        );
    }
}

export default LoginPage;
