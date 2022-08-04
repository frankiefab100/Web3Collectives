import React from "react";
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
        <h2 id="resource-title">{title}</h2>
        <p className="description detail-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
