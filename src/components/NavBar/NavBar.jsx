import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import "./NavBar.css";

const NavBar = () => {
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
        <li>
          <Link to="about">About </Link>
        </li>
        <li>
          <Link to="submit">Submit</Link>
        </li>
        <button id="tweet-btn">Tweet</button>
      </ul>
    </nav>
  );
};

export default NavBar;
