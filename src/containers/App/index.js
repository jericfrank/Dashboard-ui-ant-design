import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';

import { AppWrapper } from './css';

class App extends Component {
    render() {
        return (
            <Router>
                <AppWrapper>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                </AppWrapper>
            </Router>
        );
    }
}

export default App;
