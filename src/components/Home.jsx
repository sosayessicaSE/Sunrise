import React from "react";
import { Link } from "react-router-dom";
import "../views/home.css"; 
import house1 from "../images/house0.png";
import agents from "../images/agent.png";
import about from "../images/logogen.png";

const Home = ({ isDarkMode }) => {
  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <header className="home-header">
      </header>
      
      <section className={`gallery-section ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <div className="gallery-item">
          <Link to="/properties">
            <img src={house1} alt="Featured Properties" />
            <h2>Featured Properties</h2>
          </Link>
        </div>
        
        <div className="gallery-item">
          <Link to="/about">
            <img src={about} alt="About Us" />
            <h2>About Us</h2>
          </Link>
        </div>
        <div className="gallery-item">
          <Link to="/agents">
            <img src={agents} alt="Meet Our Agents" />
            <h2>Meet Our Agents</h2>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
