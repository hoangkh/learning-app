import React from 'react';
import {  Link } from "react-router-dom";

import './Style.css';

function UnderConstruction() {
    return <div id="under-construction-page"><h2>The page you see is under construction, please try again later!</h2>
    <Link to="/" className="brand-name">Go back to main page</Link>
    </div>;
  }

export default UnderConstruction;