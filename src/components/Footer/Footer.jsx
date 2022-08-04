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
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-nav">
          <div className="logo">
            <img className="logo-image" src={Logo} alt="web3collectives logo" />
            <span className="logo-name">Web3Collectives</span>

            <p>
              A growing archive of web3 and smart contract development resources
              to help kickstart your career in the blockchain ecosystem.
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

          <div className="footer-list">
            <div className="footer-links">
              <ul>
                <h3>INSTITUTE</h3>
                <li>About</li>
                <li>Contributing</li>
                <li>Support</li>
                <li>Join Discord</li>
              </ul>
            </div>

            <div className="footer-links">
              <ul>
                <h3>RESOURCES</h3>
                <li>Websites</li>
                <li>Youtube Videos</li>
                <li>Online Courses</li>
                <li>Interactive Games</li>
                <li>Documentations</li>
              </ul>
            </div>

            <div className="footer-links">
              <ul>
                <h3>EXTRAS</h3>
                <li>Project Templates</li>
                <li>Github Repositories</li>
                <li>Node Providers</li>
                <li>Blogs</li>
                <li>Books</li>
              </ul>
            </div>

            <div className="footer-links">
              <ul>
                <h3>TECHNOLOGIES</h3>
                <li>Ethereum</li>
                <li>Solana</li>
                <li>Polygon</li>
                <li>Celo</li>
                <li>NEAR</li>
              </ul>
            </div>
          </div>
        </div>

        <hr style={{ color: "#ccc" }} />
      </div>
      <div className="footer-attribution">
        <div className="curator">
          Curated by
          <a href="https://twitter.com/frankiefab100">Franklin Ohaegbulam</a>
        </div>

        <div className="host">
          <div className="copyright">&copy; 2022 Web3Collectives.</div>
        </div>
        <img className="vercel-logo" src={Vercel} alt="vercel logo" />
      </div>
    </React.Fragment>
  );
};

export default Footer;
