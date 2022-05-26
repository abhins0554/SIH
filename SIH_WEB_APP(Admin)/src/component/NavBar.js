import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

import {signOut}  from 'firebase/auth'

function NavBar(props) {

    const logout = async () => {
        localStorage.clear();
        window.location.href();
    }

    return (
        <div>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>UK Tourism</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <Link to="/home">User Management</Link>
                    </li>
                    <li>
                        <Link to="/news">News Management</Link>
                    </li>
                    <li>
                        <Link to="/event">Event Management</Link>
                    </li>
                    <li>
                        <Link to="/attraction">Attraction Management</Link>
                    </li>
                    <li>
                        <a onClick={()=>logout()}>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
