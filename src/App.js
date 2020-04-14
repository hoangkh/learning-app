import React from "react";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import Home from "./templates/HomePage";
import About from "./templates/AboutPage";
import NotFoundPage from "./templates/NotFoundPage";
import UnderConstructionPage from "./templates/UnderConstructionPage";


export default function App() {
  return (
    <Router>
        <Navbar id="main-nav" bg="light" expand="lg">
          <Link to="/" className="brand-name">Learning App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="menu-items" to="/about">About</Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/under-construction">
            <UnderConstructionPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
    </Router>
  );
}

