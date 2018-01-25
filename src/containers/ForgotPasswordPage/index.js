import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';

import ForgotPasswordForm from 'components/ForgotPasswordForm';

import { ForgotPageWrapper } from './css';

class ForgotPasswordPage extends Component {
    handleFormSubmit = ( err, values ) => {
        if ( !err ) {
            console.log( values );

            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <ForgotPageWrapper>
                <Link to="/" className="back-icon">
                    <Button type="primary" size="omitted">
                        <Icon type="arrow-left" /> back
                    </Button>
                </Link>
                <ForgotPasswordForm onFormSubmit={this.handleFormSubmit}/>
            </ForgotPageWrapper>
        );
    }
}

export default ForgotPasswordPage;
