import React from 'react';
import {  Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import './Style.css';

// Images
import HomeIcon from "../images/home.svg";
import GearIcon from "../images/gear.svg";
import GroupIcon from "../images/group.svg";

function Header() {
    return <Navbar id="main-nav" bg="light" expand="lg">
    <Link to="/" className="brand-name">Learning App</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="menu-items" to="/">Browse</Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav className="mr-auto">
        <Link className="menu-items" to="/"><img className="menu-icon" src={HomeIcon} alt="House icon" /></Link>
      </Nav>
      <Nav className="mr-auto">
        <Link className="menu-items" to="/my-learning">My Learning</Link>
      </Nav>
      <Nav className="mr-auto">
        <Link className="menu-items" to="/profile">Profile</Link>
      </Nav>
      <Nav className="mr-auto">
        <Link className="menu-items" to="/community"><img className="gear-icon" src={GroupIcon} alt="Group icon" /></Link>
      </Nav>
      <Nav className="mr-auto">
        <Link className="menu-items" to="/setting"><img className="gear-icon" src={GearIcon} alt="Gear icon" /></Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  }

export default Header;