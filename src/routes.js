import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import App from 'containers/App';
import HomePage from 'containers/HomePage';
import SettingsPage from 'containers/SettingsPage';
import LoginPage from 'containers/LoginPage';
import ForgotPasswordPage from 'containers/ForgotPasswordPage';

import Auth from 'components/Auth';
import Callback from 'components/Callback';

const auth = new Auth();

const handleAuthentication = ( props ) => {
    if (/access_token|id_token|error/.test(props.location.hash)) {
        auth.handleAuthentication( props );
    }
}

const DashboardRoute = ( { component : Component, ...rest } ) => {
    return (
        <Route { ...rest } render={ matchProps => (
            <App { ...matchProps }>
                <Component { ...matchProps } />
            </App>
        ) } />
    )
};

export default () => {
	return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={LoginPage}/>
                <Route path="/forgot-password" component={ForgotPasswordPage}/>
                <DashboardRoute path="/home" component={HomePage}/>
                <DashboardRoute path="/settings" component={SettingsPage}/>
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </Switch>
        </Router>
	)
}
