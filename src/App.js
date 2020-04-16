import React from "react";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./templates/Header";

import Home from "./templates/HomePage";
import Profile from "./templates/ProfilePage";
import Community from "./templates/CommunityPage";
import MyLearning from "./templates/MyLearningPage";
import Setting from "./templates/SettingPage";
import About from "./templates/AboutPage";
import NotFoundPage from "./templates/NotFoundPage";
import UnderConstructionPage from "./templates/UnderConstructionPage";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


export default function App() {
  return (
    <Router>
        <Header />
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/my-learning">
            <MyLearning />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
    
          <Route path="/">
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

