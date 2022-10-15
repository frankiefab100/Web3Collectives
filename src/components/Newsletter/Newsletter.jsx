import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import "./Newsletter.css";

const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isValidated = onValidated({
      EMAIL: email,
    });

    return email && email.indexOf("@") > -1 && isValidated;
  };

  // UX for Keyboard users
  const handleKeyUp = (e) => {
    setError(null);

    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-text">
        <h2 className="newsletter-title">Stay up to date as you learn</h2>
        <p className="newsletter-subtitle">
          {status === "success"
            ? "SubscriptionSuccessful!"
            : "Sign up to our newsletter for biweekly Web3 resources and insights."}
        </p>
      </div>

      {status === "success" && (
        <div
          className="alert-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status === "error" && !error && (
        <div
          className="alert-error"
          dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
        />
      )}

      <div className="subscribe-section">
        <div className="newsletter-subscribe">
          <form id="newsletter-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e?.target?.value ?? "")}
              onKeyUp={(e) => handleKeyUp(e.target.value)}
              required
            />

            <button onClick={handleSubmit} className="input-cta subscribe-btn">
              Subscribe <FaEnvelope />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
