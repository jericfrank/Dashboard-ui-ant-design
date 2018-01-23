import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';

export default ReactDOM.render(
    <App />,
    document.getElementById('root') || document.createElement('div')
);

registerServiceWorker();
