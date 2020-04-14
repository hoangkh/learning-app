import React from 'react';
import {  Link } from "react-router-dom";

import './Style.css';

function Setting() {
    return <div id="setting-page"><h2>This is Setting page</h2>
    <Link to="/" className="brand-name">Go back to main page</Link>
    </div>;
  }

export default Setting;