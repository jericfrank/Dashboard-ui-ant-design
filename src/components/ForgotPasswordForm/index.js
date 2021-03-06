import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';
import { LoginFormWrapper } from './css';

import Alert from 'components/Alert';

const FormItem = Form.Item;

class ForgotPasswordForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields( this.props.onFormSubmit );
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <LoginFormWrapper>
                <Form onSubmit={this.handleSubmit} className="input-form">
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Input your email!' }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="your@email.com" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="input-form-button">Send Email</Button>
                    </FormItem>
                    <Alert messages={this.props.message} type={this.props.type} />
                </Form>
            </LoginFormWrapper>
        );
    }
}

ForgotPasswordForm.propTypes = {
    onFormSubmit: PropTypes.func
};

export default Form.create()( ForgotPasswordForm );
