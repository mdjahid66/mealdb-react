import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="">
            <nav className="header ">
                <h1 className="meal-db">MEAl DB</h1>
                <div className="d-flex">
                    <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-white" type="submit">Search</button>
                </div>
                <div className="header-info">
                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#contact">Contact</a>
                    <a href="about">About</a>
                </div>

            </nav>


        </div>
    );
};

export default Header;