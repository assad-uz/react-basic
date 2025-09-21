import React from 'react';
import { Link, Outlet } from "react-router";
import Nav from '../components/Nav';

const Products = () => {
    return (
        <div>
            <Nav/>
            <h1>This is Product Page</h1>
            <ul>
                <li>
                    <Link to="men">Men</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Products;