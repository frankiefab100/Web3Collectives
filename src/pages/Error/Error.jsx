import React from "react";
import { Link } from "react-router-dom";
import ErrorIllustration from "../../assets/images/error404.svg";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-section">
      <img
        className="error-img"
        src={ErrorIllustration}
        alt="error 404 illustration"
      />
      <h1 className="title">Oops!</h1>
      <h3>PAGE NOT FOUND</h3>
      <p>
        The page you are looking for might have been removed, had its name
        changed or its temporarily unavailable.
      </p>

      <Link to="/">
        <button>GO TO HOMEPAGE</button>
        {/* GO TO HOMEPAGE */}
      </Link>
    </div>
  );
};

export default Error;
