import React from "react";
import Logo from "../../assets/images/logo.png";
import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter-section">
        <div className="newsletter-text">
          <h2 className="newsletter-title">Stay up to date as you learn</h2>
          <p className="newsletter-subtitle">
            Sign up to our newsletter for biweekly Web3 resources, freebies and
            insights.
          </p>
        </div>
        <div className="newsletter-subscribe">
          <form action="">
            <input type="email" name="email" placeholder="Enter your email" />

            <button className="subscribe-btn">
              <FaEnvelope style={{ "margin-right": "5px" }} /> Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-nav">
        <div className="footer-about">
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
                href="https://www.instagram.com/web3collectives"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
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
            </div>
          </div>
        </div>

        <div className="footer-list">
          <div className="footer-links">
            <ul>
              <li>Youtube Channels</li>
              <li>Websites</li>
              <li>Github Repo</li>
              <li>Development Tools</li>
            </ul>
          </div>

          <div className="footer-links">
            <ul>
              <li>Documentations</li>
              <li>Interactive Tutorials</li>
              <li>Project Starter Template</li>
              <li>Books</li>
            </ul>
          </div>

          <div className="footer-links">
            <ul>
              <li>Free Courses</li>
              <li>Documentations</li>
              <li>Learning Communities</li>
              <li>Node Providers</li>
            </ul>
          </div>
        </div>
      </div>

      <hr style={{ color: "#ccc" }} />

      <div className="footer-attribution">
        <div className="curator">
          Curated by
          <a href="https://twitter.com/frankiefab100">Franklin Ohaegbulam</a>
        </div>

        <div className="host">
          <span>Built on Vercel</span>
        </div>
        <div className="copyright">&copy; 2022 Web3Collectives.</div>
      </div>
    </div>
  );
};

export default Footer;
