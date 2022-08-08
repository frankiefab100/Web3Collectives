import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-32.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
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
          Number((scrollProgress / scrollHeight).toFixed(2)) * 100,
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
        <li onClick={handleMenu}>
          <Link to="submit">Support</Link>
        </li>

        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input onChange={toggleTheme} type="checkbox" id="checkbox" />

            <div className="slider circle"></div>
          </label>
        </div>

        <a
          className="tweet-btn"
          href="https://twitter.com/intent/tweet?text=Hello%20Check out @web3collectives - a FREE library of over 200+ Blockchain Development Resources"
          data-size="small"
        >
          Tweet
        </a>
      </ul>

      <span
        style={{ transform: `translateX(${scrollProgress - 102}%)` }}
        className="scroll-indicator"
      ></span>
    </nav>
  );
};

export default NavBar;
