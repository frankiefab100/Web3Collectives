import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <h1 className="title">
        Learn.<span id="highlights">Build.</span>
        Earn.
      </h1>

      <p className="tagline">
        Web3Collectives is a free library of over 200+ web3 resources on varying
        topics like Smart contract deployment, building decentralized
        applications, cryptography fundamentals, and lots more...
      </p>
    </div>
  );
};

export default Hero;
