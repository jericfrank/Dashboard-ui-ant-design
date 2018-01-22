import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'containers/LoginPage';

it( 'LoginPage renders without crashing', () => {
    const div = document.createElement( 'div' );

    ReactDOM.render(<Container />, div);
    ReactDOM.unmountComponentAtNode(div);
});
