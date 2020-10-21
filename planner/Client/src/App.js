import React, {useState} from 'react'
import './App.css';
import {Route, Router, useHistory} from "react-router-dom";
import {useCookies} from 'react-cookie';
//my Pages import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import CreateTask from './components/CreateTask';
import Cards from './components/Cards';
import MyProfile from './components/MyProfile'
import EditProfile from './components/EditProfile'
// import ProtectedRoute from './components/ProtectedRoutes';
import {Button} from '@material-ui/core'
import {Nav} from 'react-bootstrap'
import { Header } from 'react-bootstrap/lib/Modal';
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
    // CHECK IF USERINFO IS IN LOCAL STORAGE. PASS THE VARIABLE TO useState as shown
    // below
    let isUserFound = localStorage.getItem('token');
    if (isUserFound) {
        userInfo = JSON.parse(isUserFound)
    }
    const [user,
        setUser] = useState(userInfo);
    const handleLogin = e => {
        e.preventDefault();
        try {
            // jwtDecode just grabs the token. It does not validate the token. userInfo will
            // hold the user info in an object. If no jwt found, userInfo will hold the
            // false value. userInfo = jwtDecode(cookies.cookieName); ADDED THIS TO STORE
            // USER INFO UPON LOGIN
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
            <Nav
                id="myNavStyle"
                user={user}
                defaultactivekey="/"
                >

                <a className="myNavLink" onClick={() => history.push('/CreateTask')}>Home</a>
                <a className="myNavLink" onClick={() => history.push('Profile')}>Profile</a>
                <a className="myNavLink" onClick={() => history.push('cards')}>All Tasks</a>
                <Button color="primary" onClick={handleLogout}>Log Out</Button>

            </Nav>
            <Header style={{height:"70px"}}>
                <div style={{fontFamily:"Lato", fontWeight:"bolder", fontSize:"50px", color:"white", marginBottom:"40px",marginLeft:"30px" ,marginTop:"-15px", paddingBottom:"0"}}>Tasky</div>
            </Header>


            <Router history={history}>
                <Route exact path='/' component={HomePage}/>
                <Route
                    exact
                    path='/CreateTask'
                    render={props => <CreateTask {...props} user={user}/>}/>
                <Route
                    exact
                    path='/profile'
                    render={props => <MyProfile {...props} user={user} component={MyProfile}/>}/>
                <Route exact path='/cards' render={props => <Cards {...props} user={user}/>}/>
                <Route
                    exact
                    path='/EditProfile'
                    render={props => <EditProfile {...props} user={user} component={EditProfile}/>}/>
            </Router>
        </div>
    )
}
export default App;
