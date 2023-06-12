import React from "react";
import Logo from "../../assets/images/logo-32.png";
import Vercel from "../../assets/images/vercel-logo.svg";
import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-nav">
          <div className="footer-list">
            <div className="logo">
              <span className="logo-name">
                <img
                  className="logo-image"
                  src={Logo}
                  alt="web3collectives logo"
                />
                Web3Collectives
              </span>

              <p>
                A growing archive of resources to kickstart your career in the
                blockchain ecosystem.
              </p>

              <div className="socials">
                <a
                  href="https://www.twitter.com/web3collectives"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://www.github.com/frankiefab100/Web3Colectives"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://discord.com/web3collectives"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                </a>

                <a
                  href="https://www.linkedin.com/in/web3collectives"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/web3collectives"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="footer-menu">
              <div className="footer-links">
                <h3>INSTITUTE</h3>
                <li>
                  <Link to="about">About </Link>
                </li>
                <li>
                  <Link to="contact">Contact </Link>
                </li>
                <li>
                  <Link to="submit">Submit</Link>
                </li>
                <li>
                  <a href="https://dscord.com/">Join Discord</a>
                </li>
              </div>

              <div className="footer-links">
                <h3>RESOURCES</h3>
                <li>
                  <a href="#website">Websites</a>
                </li>
                <li>
                  <a href="#youtube">Youtube Videos</a>
                </li>
                <li>
                  <a href="#course">Online Courses</a>
                </li>
                <li>
                  <a href="#game">Interactive Games</a>
                </li>
                <li>
                  <a href="#doc">Documentations</a>
                </li>
              </div>

              <div className="footer-links">
                <h3>EXTRAS</h3>
                <li>
                  <a href="#template">Project Templates</a>
                </li>
                <li>
                  <a href="#repo">Github Repositories</a>
                </li>
                <li>
                  <a href="#rpc">Node Providers</a>
                </li>
                <li>
                  <a href="#book">Books</a>
                </li>
              </div>

              <div className="footer-links">
                <h3>TECHNOLOGIES</h3>
                <li>
                  <a href="https://ethereum.org">
                    Ethereum
                    <TbArrowUpRight className="arrow-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://solana.com">
                    Solana
                    <TbArrowUpRight className="arrow-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://polygon.technology">
                    Polygon
                    <TbArrowUpRight className="arrow-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://celo.org">
                    Celo
                    <TbArrowUpRight className="arrow-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://near.org">
                    NEAR
                    <TbArrowUpRight className="arrow-icon" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ color: "#ccc" }} />
      </div>
      <div className="footer-attribution">
        <div className="curator">
          Curated by {""}
          <a href="https://twitter.com/frankiefab100">Franklin Ohaegbulam</a>
        </div>

        <div className="host">
          <div className="copyright">&copy; 2023 Web3Collectives</div>
        </div>
        <div className="vercel-logo">
          <img className="vercel-logo" src={Vercel} alt="vercel logo" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
