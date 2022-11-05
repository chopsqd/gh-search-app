import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={"flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white"}>
            <h3 className={"font-bold"}>GitHub Search</h3>

            <span>
                <NavLink
                    className={(navData) => (navData.isActive ? 'mr-2 font-bold' : 'mr-2')}
                    to="/"
                >Home</NavLink>
                <NavLink
                    className={(navData) => (navData.isActive ? 'mr-2 font-bold' : 'mr-2')}
                    to="/favourites"
                >Favourites</NavLink>
            </span>
        </nav>
    );
};

export default Navigation;