import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

    return (
        <nav>
            <Link className="nav-style" to="/">
            <h3>ExerTraK</h3>
            </Link>
            <ul className="nav-links">
                <Link className="nav-style" to="/about">
                    <li>About</li>
                </Link>
                <Link className="nav-style" to="/users">
                    <li>Users</li>
                </Link>
                <Link className="nav-style" to="/routines">
                    <li>Routines</li>
                </Link>
                <Link className="nav-style" to="/exercises">
                    <li>Exercises</li>
                </Link>
                <Link className="nav-style" to="/muscle_groups">
                    <li>Muscle Groups</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;