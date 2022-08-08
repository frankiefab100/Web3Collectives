import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-text">
        <h2 className="newsletter-title">Stay up to date as you learn</h2>
        <p className="newsletter-subtitle">
          Sign up to our newsletter for biweekly Web3 resources and insights.
        </p>
      </div>
      <div className="subscribe-section">
        <div className="newsletter-subscribe">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <button className="subscribe-btn">
            Subscribe <FaEnvelope />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
