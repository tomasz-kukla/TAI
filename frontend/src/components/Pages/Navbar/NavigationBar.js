import styled from 'styled-components'

import React, { Component } from "react";
import '../../utils/styles.css'

import { Navbar, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavigationBar = () => {

    return (
        <Navbar bg="dark justify-content-center" variant="dark">
            <Navbar.Brand href="/">TAI</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Brand">Brand</Nav.Link>
                <Nav.Link href="/Shop">Shop</Nav.Link>
            </Nav>

        </Navbar>
    );
};


const MyButton = styled(Button)`

`