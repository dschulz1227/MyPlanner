import React from 'react';

import {Link} from 'react-router-dom';


export default function NavBar(props) {

    return (
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
        </div>
    )
}


