import React from 'react';
import './Style.css';

function Home() {
    const menuItems= ['Home', 'About', 'Learn', 'Social Media', 'API', 'Blog']
    return <div id="home-page">
    <div className="grid-container">
        {menuItems.map((project, index) => ( 
        <div key={index} className="project-name grid-item">{project}</div>        
        ))}                           
  </div>
  </div>;
}
  
export default Home;