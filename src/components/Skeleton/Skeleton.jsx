import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton card">
      <div id="avatar" className="card-img"></div>

      <div className="card-info">
        <div id="heading" className="resource-title"></div>
        <div id="paragraphy" className="description detail-text"></div>
        <div id="paragraphy" className="description detail-text"></div>
        <div id="paragraphy" className="description detail-text"></div>
        <div id="paragraphy" className="description detail-text"></div>
      </div>

      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default Skeleton;
