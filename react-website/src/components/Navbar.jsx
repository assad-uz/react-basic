import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar/navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Products</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
