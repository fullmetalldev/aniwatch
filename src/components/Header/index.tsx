import React from 'react';
import "./header.scss";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">

            <div className="container">

                <nav className="navbar">

                    <div className="navbar__left">

                        <h2 className="navbar__title">AnimeWatch</h2>

                        <div className="navbar__links">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/list">List anime</NavLink>
                        </div>

                    </div>

                    <div className="navbar__search">
                        <input placeholder="Search anime or movie" type="text"/>
                    </div>

                </nav>

            </div>

        </header>
    );
};

export default Header;