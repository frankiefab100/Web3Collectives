import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { db } from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    if (email !== "") {
      try {
        await setDoc(doc(db, "newsletter", email), {
          email,
        });

        setEmail("");
        alert("Subscription successfully!");
      } catch (error) {
        alert(error.message);
      }
    } else alert("Please enter a valid email address");
  };

  // UX for Keyboard users
  const handleKeyUp = (e) => {
    setError(null);

    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit();
    }
  };

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
          <form id="newsletter-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              onKeyUp={(e) => handleKeyUp(e.target.value)}
              value={email}
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
