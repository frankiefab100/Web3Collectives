import React from "react";
import { Link } from "react-router-dom";
import CHECKMARK from "../../assets/images/Success-checkmark.png";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-page">
      <div className="success-box">
        <img className="success-img" src={CHECKMARK} alt="success mark" />
        <h1 className="title">Success!</h1>
        <p>Thank you, We will get in touch shortly.</p>

        <Link to="/">
          <button>OK</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
