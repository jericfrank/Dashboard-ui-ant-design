import history from './history';
import auth0 from 'auth0-js';
import variables from 'variables';

const { AUTH_CONFIG } = variables;

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain       : AUTH_CONFIG.domain,
        clientID     : AUTH_CONFIG.clientId,
        redirectUri  : AUTH_CONFIG.callbackUrl,
        audience     : `https://${AUTH_CONFIG.domain}/userinfo`,
        responseType : 'token id_token',
        scope        : 'openid email profile'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication ( props ) {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                props.history.push('/home');
            } else if (err) {
                history.replace('/home');
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/home');
    }

    logout( props ) {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        
        // props.history.push('/login');
        
        this.auth0.logout({
            returnTo: 'http://localhost:3000/login',
        });
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    userInfo ( func ) {
        return this.auth0.client.userInfo( localStorage.getItem( 'access_token' ), func );
    }
}
