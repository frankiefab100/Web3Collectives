import React from "react";
import Website from "../../components/Resources/Website";
import YoutubeChannel from "../../components/Resources/YoutubeChannel";
import DevTool from "../../components/Resources/DevTool";
import Course from "../../components/Resources/Course";
import Game from "../../components/Resources/Game";
import Documentation from "../../components/Resources/Documentation";
import GithubRepo from "../../components/Resources/GithubRepo";
import ProjectTemplate from "../../components/Resources/ProjectTemplate";
import NodeProvider from "../../components/Resources/NodeProvider";
import Book from "../../components/Resources/Book";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import Featured from "../../components/Featured/Featured";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="title">
          Learn.<span id="highlights">Buidl.</span>
          Earn.
        </h1>

        <p className="tagline">
          Web3Collectives is a free library of over 200 web3 resources on
          varying topics like Smart contract deployment, building decentralized
          applications, cryptography fundementals and lots more...
        </p>
      </div>

      {/* -- Search Filter section -- */}
      <SearchFilter />

      {/* -- Resources section -- */}
      <Website />
      <YoutubeChannel />
      <DevTool />
      <Course />
      <Game />
      <Documentation />
      <GithubRepo />
      <ProjectTemplate />
      <NodeProvider />
      <Book />

      {/* -- Featured section -- */}
      <Featured />
    </div>
  );
};

export default Home;
