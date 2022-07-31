import React from "react";
// import { BiLinkExternal } from "react-icons/bi";
import "./Card.css";

const Card = ({ title, coverImage, description, url, index }) => {
  return (
    <div key={index} className="card">
      <div className="card-img">
        <a href={url} target="_blank">
          <img src={coverImage} alt="resource image" />
        </a>
      </div>

      <div className="card-info">
        <h2 id="title">{title} </h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
