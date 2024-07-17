import React from 'react';
import { Link } from 'react-router-dom'; 
import '../views/Navbar.css'; 

const Navbar = ({ themeClass }) => {
  return (
    <div className={`navbar ${themeClass}`}>
      <nav>

      <h1 className='homelink'>
          <Link to="/">HOME</Link>
          </h1>

        <ul className="menuList">
        <li>
            <Link to="/properties">PROPERTIES</Link>
          </li>
          <li>
            <Link to="/agents">AGENTS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>  
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
