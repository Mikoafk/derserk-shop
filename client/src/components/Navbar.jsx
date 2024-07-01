import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">D E R</h1>
            <img className="navbar-logo" alt="logo" src={require("../static/img/derserk_white.png")} />
            <h1 className="navbar-title">E R K</h1>
        </nav>
    )
}