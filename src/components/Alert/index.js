import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

class AlertComponent extends Component {
    render() {
        if ( this.props.messages ) {
            return (
                <Alert message={this.props.messages} type={this.props.type} />
            );
        }

        return '';
    }
}

AlertComponent.propTypes = {
    messages : PropTypes.string,
    type     : PropTypes.string.isRequired
};

export default AlertComponent;
