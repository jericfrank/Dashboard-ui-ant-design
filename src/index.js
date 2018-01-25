import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

export default ReactDOM.render(
    <Routes />,
    document.getElementById('root') || document.createElement('div')
);

registerServiceWorker();
