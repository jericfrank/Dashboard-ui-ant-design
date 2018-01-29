import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';

import Auth from 'components/Auth';
import ForgotPasswordForm from 'components/ForgotPasswordForm';

import { ForgotPageWrapper } from './css';

const auth = new Auth();

class ForgotPasswordPage extends Component {
    state = {
        message : '',
        type    : ''
    };

    handleFormSubmit = ( err, { email } ) => {
        if ( !err ) {
            auth.auth0.changePassword({
                connection : 'Username-Password-Authentication',
                email      : email
            }, (err, resp) => {
                if(err){
                    this.setState({ message : err.description, type : 'error' });
                }else{
                    this.setState({ message : `We've just sent you an email to reset your password to ${email}`, type : 'success' });
                }
            });
        }
    }

    render() {
        return (
            <ForgotPageWrapper>
                <Link to="/" className="back-icon">
                    <Button type="primary">
                        <Icon type="arrow-left" /> back
                    </Button>
                </Link>
                <ForgotPasswordForm onFormSubmit={this.handleFormSubmit} {...this.state}/>
            </ForgotPageWrapper>
        );
    }
}

export default ForgotPasswordPage;
