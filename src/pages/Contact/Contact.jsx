import React from "react";
import ContactImg from "../../assets/images/contact-img.jpeg";
// import Featured from "../../components/Featured/Featured";
// import Footer from "../../components/Footer/Footer";
// import Newsletter from "../../components/Newsletter/Newsletter";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <img id="heading-img" src={ContactImg} alt="contact us" />
        <div className="tagline">
          Help us make Web3 education accessible for all, we can't achieve our
          vision alone.
        </div>
        <h1 id="heading" className="title">
          Contact Us
        </h1>
        <p>
          You can also become a contributor to Web3Collectives. This project is
          open source on
          <a
            href="https://github.com/frankiefab100/Web3Collectives"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . Did you find a new resource(s) or have any suggestion or general
          feedback! Open an issue or submit a pull request! Don't forget to see
          our contributing guides. We appreciate every contribution.
        </p>
        <p>
          For more details or assistance, send an email at
          <a
            href="mailto:web3collectives@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            web3collectives@gmail.com
          </a>{" "}
          or reach out on
          <a
            href="https://web3collectives"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            twitter
          </a>
          . Also follow us and join our growing community to learn, and
          collaborate with fellow like-minds.
        </p>
        <h2>Support</h2>
        <p>
          If you appreciate what we are doing at Web3Collectives, you can
          <a href="https://www.buymeacoffee.com/frankiefab100" target="_blank">
            Buy me a coffee
          </a>{" "}
          or Donate via{" "}
          <em>MATIC: 0x370f92912744ecae29991b8668e1bf5730e6e6d8 </em>
        </p>
        <h2>Partner/Sponsor</h2>
        <p>
          If you would like to collaborate or partner with us, you can send a
          message
        </p>

        <div className="form-container">
          <form className="form contact-form" action="" method="POST">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email-address" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />

            <label htmlFor="message">Message</label>
            <textarea name="message" cols="30" rows="10" required></textarea>

            <button className="submit-btn">Send</button>
          </form>
        </div>
      </div>
      {/* <Featured />
      <Newsletter />
      <Footer /> */}
    </>
  );
};

export default Contact;
