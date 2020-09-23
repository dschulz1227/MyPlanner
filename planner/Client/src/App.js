import React, {useState} from 'react'
import './App.css';
// import axios from 'axios'; import {Container, Col, Row} from 'reactstrap';
// import RegistrationForm from './components/RegisterForm'; import TaskCard
// from './components/TaskCard';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
// import Cards from './components/Cards'; import RouteConfigExample from
// './Routes'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import ProfilePage from './components/ProfilePage';

function App() {

    const [thisForm,
        setThisForm] = useState({})

    return (
        <Router>
<div>
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile Page</Link>
                </li>
            </ul>
            </nav>

            <Switch>

                <Route path="/">
                    <HomePage/>
                </Route>
                <Route path="/profile">
                    <ProfilePage/>
                </Route>

            </Switch>
            </div>
        </Router>
    )
}

export default App;
