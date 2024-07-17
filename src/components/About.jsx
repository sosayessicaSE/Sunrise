import React from "react";
import "../views/about.css"; 

const AboutUs = ({ isDarkMode }) => {
  return (
    <div className="background-gif">
      
      <div className="grid-container">
        <div className={`about ${isDarkMode ? 'dark-theme' : 'light-theme'}`} id="div1">
          <h2>Our Vision</h2>
          <p className={`text ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            At Sunrise, our vision is to revolutionize the real estate market by providing a seamless and transparent experience for our clients. We aim to leverage the latest technologies and design principles to create a platform that simplifies the process of buying and selling properties.
          </p>
        </div>

        <div className={`about ${isDarkMode ? 'dark-theme' : 'light-theme'}`} id="div1">
          <h2>Our Mission</h2>
          <p className={`text ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            Our mission is to connect people with their dream homes by offering a comprehensive and intuitive real estate platform. We are committed to offering high-quality listings, detailed property information, and exceptional customer service.
          </p>
        </div>
        
        <div className={`about ${isDarkMode ? 'dark-theme' : 'light-theme'}`} id="div2">
          <h2>Design</h2>
          <p className={`text ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            This template was meticulously designed by Yessica Sosa, a Full Stack developer, known for creating aesthetically pleasing and highly functional web pages.
          </p>
        </div>

        <div className={`about ${isDarkMode ? 'dark-theme' : 'light-theme'}`}  id="div2">
          <h2>Future Projects</h2>
          <p className={`text ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            Sunrise is more than just a template; it is a foundation for future projects in the real estate sector. Our goal is to continuously improve and expand our platform, integrating new features and technologies to meet the evolving needs of our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
