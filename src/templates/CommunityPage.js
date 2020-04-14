import React from 'react';
import {  Link } from "react-router-dom";

import './Style.css';

function Community() {
    return <div id="community-page"><h2>This is community page</h2>
    <Link to="/" className="brand-name">Go back to main page</Link>
    </div>;
  }

export default Community;