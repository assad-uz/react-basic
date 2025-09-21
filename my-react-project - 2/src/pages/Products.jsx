import React from 'react';
import { Link } from "react-router";
import Nav from '../components/Nav';

const Products = () => {
    return (
        <div>
            <Nav/>
            <h1>This is Product Page</h1>
            <nav>
            <ul>
                <li>
                    <Link to="products">Men</Link>
                </li>
            </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Products;