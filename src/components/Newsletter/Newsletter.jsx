import {useState} from "react";
import {FaEnvelope} from "react-icons/fa";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    setSubscribing(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formId = import.meta.env.VITE_APP_CONVERTKIT_FORM_ID;
    const url = `https://app.convertkit.com/forms/${formId}/subscriptions`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });

      if (response.ok) {
        setSuccessMessage("Subscription successful! Thank you");
        setEmail("");
      } else {
        setErrorMessage("Error subscribing. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }

    setSubscribing(false);
  };

  // Inline CSS to overrride default style in Convertkit
  const emailStyle = {
    backgroundColor: "var(--bg-color-secondary)",
    position: "relative",
    color: "#222",
    padding: "1.2rem",
    fontSize: "1rem",
    width: "550px",
  };

  const subscribeBtnStyle = {
    backgroundColor: "var(--cta-primary)",
    position: "absolute",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    fontSize: "80%",
    gap: "0.6rem",
    top: "5px",
    right: "5px",
    bottom: "5px",
  };

  return (
    <div
      style={{display: "flex", flexDirection: "column", textAlign: "center"}}
    >
      <div className="newsletter-text">
        <h2
          style={{
            letterSpacing: "normal",
            "@media (maxWidth: 560px)": {
              fontSize: "1.4rem",
            },
          }}
        >
          Stay up to date as you learn
        </h2>
        <p
          style={{
            margin: "5px 0 20px",
            "@media (maxWidth: 560px)": {
              fontSize: "0.85rem",
            },
          }}
        >
          Sign up to our newsletter for biweekly Web3 resources and insights.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "10px 50px 0px",
        }}
      >
        <div
          style={{
            position: "relative",
            margin: "1rem 0 3rem",
          }}
        >
          <form
            style={{
              position: "relative",
              display: "block",
              marginTop: "0em",
            }}
            onSubmit={handleSubmit}
          >
            <input
              style={{
                ...emailStyle,
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <button
              disabled={subscribing}
              style={{
                ...subscribeBtnStyle,
              }}
              id="subscribe-btn"
              className="input-cta subscribe-btn"
            >
              Subscribe <FaEnvelope />
            </button>
          </form>
          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
