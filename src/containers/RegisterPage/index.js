import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Icon } from 'antd';

import Alert from 'components/Alert';
import Auth from 'components/Auth';

import { AuthWrapper, AuthForm } from './css';

const FormItem = Form.Item;
const auth     = new Auth();

class RegisterPage extends Component {
    constructor () {
		super();

        this.state = {
            confirmDirty : false,
            message      : '',
            type         : ''
        };
	}

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields( ( err, res ) => {
            if (!err) {
                auth.auth0.signup({
                    connection : 'Username-Password-Authentication',
                    email      : res.Email,
                    password   : res.Password
                }, (err) => {
                    if (err) {
                        this.setState({ message : err.description, type : 'error' });
                    } else {
                        this.setState({ message : 'Succesfully registed. Check your email.', type : 'success' });
                    }
                });
            }
        } );
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;

        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;

        if (value && value !== form.getFieldValue('Password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;

        if (value && this.state.confirmDirty) {
            form.validateFields(['Confirm'], { force: true });
        }

        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <AuthWrapper>
                <Link to="/login" className="back-icon">
                    <Button type="primary">
                        <Icon type="arrow-left" /> back
                    </Button>
                </Link>
                <AuthForm onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator( 'Email', {
                            rules: [
                                {
                                    type    : 'email',
                                    message : 'The input is not valid E-mail!',
                                }, {
                                    required : true,
                                    message  : 'Please input your E-mail!',
                                }
                            ],
                        })(
                            <Input type="text" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator( 'Password', {
                            rules: [
                                {
                                    required : true,
                                    message  : 'Please input your password!'
                                },
                                {
                                    validator: this.checkConfirm,
                                }
                            ]
                        })(
                            <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator( 'Confirm', {
                            rules: [
                                {
                                    required : true,
                                    message  : 'Please confirm your password!'
                                },
                                {
                                    validator: this.checkPassword,
                                }
                            ]
                        })(
                            <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">Register</Button>
                    </FormItem>
                    <Alert messages={this.state.message} type={this.state.type} />
                </AuthForm>
            </AuthWrapper>
        );
    }
}

export default Form.create()( RegisterPage );
