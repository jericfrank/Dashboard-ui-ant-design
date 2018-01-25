import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';

import Layout from 'components/Layout';

import { AppWrapper } from './css';

const DashboardRoute = ( { component : Component, ...rest } ) => {
    return (
        <Route { ...rest } render={ matchProps => (
            <Layout>
                <Component { ...matchProps } />
            </Layout>
        ) } />
    )
};

class App extends Component {
    render() {
        return (
            <Router>
                <AppWrapper>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>
                        <Route path="/login" component={LoginPage}/>
                        <DashboardRoute path="/home" component={HomePage}/>
                    </Switch>
                </AppWrapper>
            </Router>
        );
    }
}

export default App;
