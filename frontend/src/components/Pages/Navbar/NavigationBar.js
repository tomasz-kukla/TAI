import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "typeface-roboto";

export const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" style={{ borderBottom: '1.5px solid darkgrey' }}>
            <NavbarLink to="/" style={{ marginRight: 400 }}>
                TAI</NavbarLink>
            <Nav.Link className="mx-4">
                <NavbarLink to="/Brand">Brand</NavbarLink>
            </Nav.Link>
            <Nav.Link className="mx-4">
                <NavbarLink to="/Shop">Shop</NavbarLink>
            </Nav.Link>

        </Navbar >
    );
};

const NavbarLink = styled(Link)`
  font-family: Roboto !important;
  font-size: 14pt !important;
  color: gray;
  transition: all .2s ease-in-out;
  :hover{
    text-decoration: none;
    color: red!important;
  }
`;