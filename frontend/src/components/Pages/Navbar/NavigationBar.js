import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../utils/styles.css'



export const NavigationBar = () => {
    return (
        <nav className="topnav">
            <a className="nav1" href="/">Home</a>
            <a className="nav2" href="/Brand">Brand</a>
            <a className="nav3" href="/Shop">Shop</a>
        </nav>
    );
};

