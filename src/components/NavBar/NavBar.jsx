import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({ toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <nav className={`nav ${showNav && "nav-height"}`}>
      <Link to="/">
        <div className="logo">
          <img className="logo-image" src={Logo} alt="web3collectives logo" />
          <span className="logo-name">Web3Collectives</span>
        </div>
      </Link>

      <div className="hamburger-icon" onClick={handleMenu}>
        {showMenu ? <CgClose /> : <CgMenuRightAlt />}
      </div>

      <ul className={`${showMenu ? "nav-links mobile-nav" : "nav-links"}`}>
        <li onClick={handleMenu}>
          <Link to="about">About </Link>
        </li>
        <li onClick={handleMenu}>
          <Link to="submit">Contribute</Link>
        </li>

        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            {toggleTheme ? (
              <FaMoon className="moon" />
            ) : (
              <FaSun className="sun" />
            )}
            <input onChange={toggleTheme} type="checkbox" id="checkbox" />

            <div className="slider circle"></div>
          </label>
        </div>

        <button id="support-btn">Support</button>
        <button id="tweet-btn">Tweet</button>
      </ul>
    </nav>
  );
};

export default NavBar;
