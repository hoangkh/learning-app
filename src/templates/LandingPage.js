import React from 'react';
import {  Link } from "react-router-dom";

import './Style.css';

function Template() {
    return <div id="notfound-page"><h2>This is template page</h2>
    <Link to="/" className="brand-name">Go back to main page</Link>
    </div>;
  }

export default Template;