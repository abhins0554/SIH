import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar(props) {
    return (
        <div>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>UT Tourism</h3>
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
                        <Link to="/disaster">Disaster Management</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
