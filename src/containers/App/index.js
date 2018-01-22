import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
