import React from "react";
import AboutImg from "../../assets/images/about-img.jpg";
// import Featured from "../../components/Featured/Featured";
// import Footer from "../../components/Footer/Footer";
// import Newsletter from "../../components/Newsletter/Newsletter";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <img id="heading-img" src={AboutImg} alt="collaboration team" />
        <div className="tagline">
          We are championing access free Web3 education.
        </div>
        <h1 id="heading" className="title">
          Introduction
        </h1>
        <p>
          What started as a README file of blockchain development resources on
          <a
            href="https://github.com/frankiefab100/Blockchain-Development-Resources"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          in the fourth quarter of 2021, Web3collectives has evolved as an
          online encyclopedia of free educational resources of various trending
          topics in the Blockchain industry.
        </p>
        <p>
          We are committed to the journey to broaden blockchain technology
          education and it's Innovations across the globe.
        </p>
        <p>
          As a community, we aim to encourage participation in Decentralized
          Autonomous Organizations, Bug Bounty Hunting, Community Management,
          and Knowledge sharing to facilitate career growth. If you ended up
          here, you’re probably interested in learning about blockchain
          technology and the decentralized internet (Otherwise known as Web3).
        </p>
        <h2>How It Started</h2>
        <p>
          We noticed that existing learning resources on blockchain development
          are all over the internet and various platforms. To make it much
          easier for Web3 enthusiasts to access these informations - that was
          how
          <strong> Web3collectives </strong>came about.
        </p>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To champion and facilitate adoption and expansion of blockchain
            technology through free education and various initiatives. Knowing
            how complex blockchain technology is, our work focuses on Web3
            enthusiasts to onboard them to innovations like NFTs, DeFi, DEX,
            DAOs, ReFi etc by sharing learning resources.
          </p>
          <h2>Future Plans</h2>

          <h3>Training and Mentorship</h3>
          <p>
            We plan to foster intensive training and mentorship to help newbies
            learn from more experienced developers.
          </p>
          <p>
            We plan to organize blockchain events, talks and hackathons to share
            ideas, learn and network.
          </p>
        </div>
      </div>

      {/* <Featured />
      <Newsletter />
      <Footer /> */}
    </>
  );
};

export default About;
