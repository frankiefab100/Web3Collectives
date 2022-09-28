import React from "react";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      If you appreciate what we are doing at Web3Collectives, you can buy me a
      coffee or donate via: If you have any feedback or ideas to share, reach
      out on twitter or send me an email
      <img id="heading-img" src={AboutImg} alt="collaboration team" />
      <small className="tagline">
        Help us make Web3 education accessible for all, we can't achieve our
        vision alone.
      </small>
      <h1 id="heading" className="title">
        Contact Us
      </h1>
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
      </p>
      <p>
        You can also become a contributor to Web3Collectives. This project is
        open source on
        <a
          href="https://github.com/frankiefab100/Blockchain-Development-Resources"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . Do you find a new resource(s) or have any suggestion or general
        feedback! Open an issue or submit a pull request! Don't forget to see
        our contributing guides. We appreciate every contribution. For more
        details or assistance, send an email at
        <a
          href="mailto:web3collectives@gmail.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          web3collectives@gmail.com
        </a>
        or reach out on
        <a
          href="https://web3collectives"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          twitter{" "}
        </a>
      </p>
      <p>
        Follow us on social media and join our growing community to learn, and
        colaborate with fellow like-minds. PS: All the contents on this website
        belong to the respective authors.
      </p>
      <h2>Partner/Sponsor</h2>
      <p>If you would like to collaborate or partner, send us a message</p>
      <Featured />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
