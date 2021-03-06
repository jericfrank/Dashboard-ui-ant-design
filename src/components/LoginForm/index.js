import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alert from 'components/Alert';
import LoginSocial from 'components/LoginSocial';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { LoginFormWrapper } from './css';

const FormItem = Form.Item;

class LoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields( this.props.onFormSubmit );
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <LoginFormWrapper>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <LoginSocial />
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="/forgot-password">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                        Or <a href="/register">register now!</a>
                    </FormItem>
                    <Alert messages={this.props.error} type="error" />
                </Form>
            </LoginFormWrapper>
        );
    }
}

LoginForm.propTypes = {
    onFormSubmit : PropTypes.func.isRequired,
    error        : PropTypes.string.isRequired
};

export default Form.create()( LoginForm );
