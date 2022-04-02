import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const { pathname } = useLocation();

    return (

        <nav className="header " style={pathname.includes('details') ? { display: 'none' } : { display: 'flex' }}>
            <h1 className="meal-db">MEAl DB</h1>
            <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-white" type="submit">Search</button>
            </div>
            <div className="header-info">
                <Link to="/home">Home</Link>
                <Link to="/catagory">Catagory</Link>
                <Link to="/details">Details</Link>
                <Link to="/about">About</Link>
            </div>

        </nav>



    );
};

export default Header;