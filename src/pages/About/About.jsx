import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <h1 id="heading" className="title">
        Introduction
      </h1>
      <p>
        If you ended up here, you’re probably interested in learning about
        blockchain technology and the decentralized internet (Otherwise known as
        Web3).
      </p>
      <h2>How It Started</h2>
      <p>
        We noticed that existing learning resources about blockchain development
        are all over the different platforms and the internet. To make it much
        easier for Web3 enthusiasts to browse and access information - that was
        how
        <strong> Web3collectives </strong>came about.
      </p>
      <p>
        This project started as a curated list of resources in a
        <a
          href="https://github.com/frankiefab100/Blockchain-Development-Resources"
          target="_blank"
          rel="noopener noreferrer"
        >
          github repository.
        </a>
        <br />
        You can also become a contributor to Web3Collectives. This project is
        open source on GitHub. Do you find a new resource(s) or have any
        suggestion or general feedback! Open an issue or submit a pull request!
        Don't forget to see our contributing guides. We appreciate every
        contribution. If you would like to collaborate or partner email us at
        <a
          href="mailto:web3collectives@gmail.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          web3collectives@gmail.com
        </a>
      </p>
      <p>
        Follow us on social media and join our growing community to learn, and
        colaborate with fellow like-minds.
      </p>
      PS: All the contents on this website belong to the respective authors.
    </div>
  );
};

export default About;
