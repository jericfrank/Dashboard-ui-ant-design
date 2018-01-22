import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'containers/HomePage';

it( 'HomePage renders without crashing', () => {
    const div = document.createElement( 'div' );

    ReactDOM.render(<Container />, div);
    ReactDOM.unmountComponentAtNode(div);
});
