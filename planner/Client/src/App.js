import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import { Row, Col } from 'reactstrap';
import { Route, Router, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';
//my Pages
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import CreateTask from './components/CreateTask';
import Cards from './components/Cards';
// import ProtectedRoute from './components/ProtectedRoutes';


const jwtDecode = require('jwt-decode');
function App() {
    const cookieName = 'planned';
    const [cookies,
        setCookie,
        removeCookie] = useCookies([cookieName]);
    const history = useHistory();
    let userInfo = false;
    function isEmpty(obj) {
        return Object
            .keys(obj)
            .length === 0;
    }


    //CHECK IF USERINFO IS IN LOCAL STORAGE. PASS THE VARIABLE TO useState as shown below
    let isUserFound = localStorage.getItem('token');
    if (isUserFound) {
        userInfo = JSON.parse(isUserFound)
    }
    const [user, setUser] = useState(userInfo);
    const handleLogin = e => {
        e.preventDefault();
        try {
            // jwtDecode just grabs the token. It does not validate the token. userInfo will
            // hold the user info in an object. If no jwt found, userInfo will hold the
            // false value.
            //userInfo = jwtDecode(cookies.cookieName);

            
            //ADDED THIS TO STORE USER INFO UPON LOGIN
            let isUserFound = localStorage.getItem('token');
            if (isUserFound) {
                userInfo = JSON.parse(isUserFound)
            }
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
        //ADDED THIS TO REMOVE TOKEN
        localStorage.removeItem("token");
        window.location.href = '/'
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
                <NavBar />
            </nav>
            { user && <div>

                {/** ADD THIS SO USER KNOWS THEY ARE LOGGED IN */}

                {user ? <h3>hello, {user.email}</h3> : <p>Please login to use planner</p>}
                <button onClick={handleLogout}>Log Out</button>
            </div>
            }
            
            <Router history={history}>
                <Route
                    exact
                    path='/CreateTask'
                    handleLogin={handleLogin}
                    component={CreateTask} />
                <Route
                    exact
                    path='/'
                    component={HomePage} />
                <Route exact path='/profile' render={props => <ProfilePage {...props} user={user} />} />
                {/* USE THIS LOGIC WHEN NAVIGATING THRU LINKS*/}
                <Route exact path='/cards' render={props => <Cards {...props} user={user} />} />
            </Router>
        </div>
    )
}
export default App;