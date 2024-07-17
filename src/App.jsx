import React, { useState, useEffect } from "react";
import "./views/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import PropertyList from "./components/PropertyList";
import Footer from "./components/footer";
import { keepTheme, setTheme } from "./components/mode";
import Toggle from "./components/toggle";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Agents from "./components/Agents";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    keepTheme();
    const currentTheme = localStorage.getItem("theme");
    setIsDarkMode(currentTheme === "theme-dark");
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <Router>
      <div className={`App ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Toggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Navbar themeClass={themeClass} />
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/properties"
            element={
              <PropertyList isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/about"
            element={
              <About isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/agents"
            element={
              <Agents isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
