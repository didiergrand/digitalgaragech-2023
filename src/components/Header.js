import Logo from "../components/Logo";
import instagram from "../images/instagram-light.png";
import instagramLight from "../images/instagram-dark.png";
import instagramHover from "../images/instagram-hover.png";
import linkedin from "../images/linkedin-light.png";
import linkedinLight from "../images/linkedin-dark.png";
import linkedinHover from "../images/linkedin-hover.png";
import { Link, useLocation } from "react-router-dom";
import "../css/HomePage.css";
import React from "react";

function Header() {
    //const [darkMode, setDarkMode] = React.useState(false);
    //const currentTheme = localStorage.getItem("dgtheme");
    const location = useLocation();
    const responsive = () => {
      const navigation = document.getElementById("site-navigation");
      if (navigation.className === "topnav") {
        navigation.className += " responsive";
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        navigation.className = "topnav";
        document.querySelector('body').style.overflow = 'auto';
      }
    }

    console.log(localStorage.getItem('color-theme'));
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }
    }

    
  
    window.addEventListener('load', () => {
      const switchToggle = document.querySelector(".switch");
      const switchInput = switchToggle.querySelector("input");
      //switchTheme(currentTheme, switchInput);


      switchInput.addEventListener('change', function() {
        // setDarkMode(!darkMode);
        //var theme = document.body.classList.contains("dark") ? "dark" : "light";
          if (this.checked) {console.log("dark");
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
          } else {
            console.log("light");
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
          }
      });
    });
  return (      
    <header className={location.pathname === "/" ? "home-header" : ""}> 
      
      <Logo />
      <div id="site-navigation" className="topnav">
        <div className="menu-toggle hamburger-lines" onClick={responsive}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div id="navs">
          <div id="mainnav">
            <label>Navigation</label>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/photos">Photos</Link>
                </li>
                <li>
                  <Link to="/web-projects">Web Projects</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="socialnav">
            <label>Réseaux sociaux</label>
            <nav>
              <ul>
                <li>
                  <a href="/">
                    <img src={instagram} alt="instagram" className="dark" />
                    <img
                      src={instagramLight}
                      alt="instagram"
                      className="light"
                    />
                    <img
                      src={instagramHover}
                      alt="instagram"
                      className="hovericon"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={linkedin} alt="linkedin" className="dark" />
                    <img src={linkedinLight} alt="linkedin" className="light" />
                    <img
                      src={linkedinHover}
                      alt="linkedin"
                      className="hovericon"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="colormode">
            <label>Couleurs</label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
