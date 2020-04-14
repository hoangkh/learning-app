import React from 'react';
import {  Link } from "react-router-dom";

function Profile() {
    return <div id="profile-page"><h2>This is profile page</h2>
    <Link to="/" className="brand-name">Go back to main page</Link>
    </div>;
  }

export default Profile;