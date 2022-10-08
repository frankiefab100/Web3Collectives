import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Newsletter.css";

const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      setEmail("");
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && email.indexOf("@") > -1 && onValidated(MERGE0)) {
      setEmail((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
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

      <div className="subscribe-section">
        <div className="newsletter-subscribe">
          <form
            action="https://app.us14.list-manage.com/subscribe/post"
            id="newsletter-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={setEmail}
              value={email}
              isRequired
            />

            <button className="subscribe-btn">
              Subscribe <FaEnvelope />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const MailchimpForm = () => {
  const subscriptionUrl = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div>
      <MailchimpSubscribe
        url={subscriptionUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
