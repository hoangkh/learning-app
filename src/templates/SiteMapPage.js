import React from 'react';
import {  Link } from "react-router-dom";

function SiteMap() {
    return <div id="site-map-page"><h2>This is Not found page</h2>
    <Link to="/" className="brand-name">Go back to main page</Link>
    </div>;
  }

export default SiteMap;