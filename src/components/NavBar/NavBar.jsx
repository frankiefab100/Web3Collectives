import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import "./NavBar.css";

export const NavBar = ({ toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setScrollProgress(
          Number((scrollProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

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

        <button id="tweet-btn">Tweet</button>
      </ul>

      <span
        style={{ transform: `translateX(${scrollProgress - 100}%)` }}
        className="scroll-indicator"
      ></span>
    </nav>
  );
};

export default NavBar;
