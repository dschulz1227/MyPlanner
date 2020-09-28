import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import {Row, Col} from 'reactstrap';

import {Route, Router, useHistory} from "react-router-dom";
import {useCookies} from 'react-cookie';
//my Pages

import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import CreateTask from './components/CreateTask';
 
// import ProtectedRoute from './components/ProtectedRoutes';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegisterForm';
// import Axios from 'axios';

// import Cards from './components/Cards'; import RouteConfigExample from
// './Routes'
const jwtDecode = require('jwt-decode');

function App() {

    const cookieName = 'planned';

    const [cookies,
        setCookie,
        removeCookie] = useCookies([cookieName]);

    const history = useHistory();

    let userInfo = false;
    
    const [user,
        setUser] = useState(userInfo);

    function isEmpty(obj) {
        return Object
            .keys(obj)
            .length === 0;
    }

    //checks if cookie is found
    if (!isEmpty(cookies)) {
        try {
            // jwtDecode just grabs the token. It does not validate the token. userInfo will
            // hold the user info in an object. If no jwt found, userInfo will hold the
            // false value.
            userInfo = jwtDecode(cookies.planner);
        } catch {
            //if token is not found, send user to landing page.
            history.push("/");
        }
    }



    const handleLogin = e => {
        e.preventDefault();

        try {
            // jwtDecode just grabs the token. It does not validate the token. userInfo will
            // hold the user info in an object. If no jwt found, userInfo will hold the
            // false value.
            userInfo = jwtDecode(cookies.cookieName);
            setUser(userInfo);

            history.push("/home");
            window
                .location
                .reload(false);
            //console logg all user varaibles here
        } catch {
            //if token is not found, send user to landing page.
            history.push("/");
        }
        //if user is found, send to home component

    }

    const handleLogout = e => {
        e.preventDefault();

        //if user logs out, set user to false and remove cookie
        setUser(false);
        window
            .location
            .reload(false);
        removeCookie(cookieName, {path: '/'});
    }

    const setCookieApp = (jwt) => {
        let d = new Date();
        setCookie(cookieName, jwt)
    };

    return (

        <div className="App">

            <nav
                style={{
                display: "flex",
                width: "100%",
                height: "50px",
                top: "0",
                justifyContent: "space-around",
                alignContent: "center",
                backgroundColor: "black",
                alignItems: "center"
            }}>
                <NavBar/>
            </nav>

            <div>
                <Row>
                    <HomePage user={user}/>
                    <CreateTask user={user}/>
                </Row>
            </div>

            <Router history={history}>
                <Route
                    exact
                    path='/'
                    handleLogin={handleLogin}
                    // render={props => <HomePage
                    // {...props}
                    user={user}
                    handleLogin={handleLogin}
                    setCookieApp={setCookieApp}/>
                <Route
                    exact
                    path="/profile"
                    user={user}
                    component={ProfilePage}
                    handleLogout={handleLogout}/>
            </Router>
        </div>
    )
}

export default App;
