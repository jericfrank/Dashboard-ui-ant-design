import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { LoginFormWrapper } from './css';

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
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Input your email!' }],
                        })(
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="your@email.com" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="input-form-button">Send Email</Button>
                    </FormItem>
                </Form>
            </LoginFormWrapper>
        );
    }
}

ForgotPasswordForm.propTypes = {
    onFormSubmit: PropTypes.func
};

export default Form.create()( ForgotPasswordForm );
