import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { useReducer } from "react";
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import "./Newsletter.css";

const initialState = {
  sendEmail: "",
  successMessage: false,
  subscribing: false,
};

const ACTION = {
  FIELD: "field",
  SUCCESS_MESSAGE: "successMessage",
  SUBSCRIBING: "subscribing",
  SET_DEFAULT: "setDefault",
};

function handleEmails(state, action) {
  switch (action.type) {
    case ACTION.FIELD: {
      return {
        ...state,
        [action.field]: action.value,
        sendEmail: action.value,
      };
    }

    case ACTION.SUCCESS_MESSAGE: {
      return {
        ...state,
        successMessage: true,
      };
    }
    case ACTION.SUBSCRIBING: {
      return {
        ...state,
        subscribing: true,
      };
    }
    case ACTION.SET_DEFAULT: {
      return {
        [action.field]: "",
        sendEmail: "",
        subscribing: false,
        successMessage: false,
      };
    }
    default:
      throw new Error();
  }
}

const Newsletter = () => {
  const [state, dispatch] = useReducer(handleEmails, initialState);
  const { sendEmail, successMessage, subscribing } = state;
  const emailRef = collection(db, "emails");

  async function handleSubmit(e) {
    e.preventDefault();

    await dispatch({ type: ACTION.SUBSCRIBING });
    await addDoc(emailRef, { email: sendEmail });
    await dispatch({ type: ACTION.SUCCESS_MESSAGE });
    await setTimeout(() => {
      dispatch({ type: ACTION.SET_DEFAULT });
    }, 3000);
  }

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
          <form id="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) =>
                dispatch({
                  type: ACTION.FIELD,
                  value: e.target.value,
                  field: "email",
                })
              }
              required
            />

            <button disabled={subscribing} className="input-cta subscribe-btn">
              Subscribe <FaEnvelope />
            </button>
          </form>
          {successMessage && "Subscription successful! Thank you"}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
