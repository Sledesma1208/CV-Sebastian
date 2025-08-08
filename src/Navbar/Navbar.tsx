import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <select className="language-dropdown">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
            <div className="navbar-right">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;