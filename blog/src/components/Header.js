import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "gatsby";

export default (props) => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand>
            <Nav.Link as={Link} to="/">Gtasby-Bootstrap</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)