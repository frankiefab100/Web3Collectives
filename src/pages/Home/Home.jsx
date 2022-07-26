import React from "react";
import { FaSearch } from "react-icons/fa";
import DevDaoLogo from "../../assets/images/DeveloperDAO.png";
import ImmunefiLogo from "../../assets/images/Immunefi.png";
import CadenaLogo from "../../assets/images/Cadena.png";
import Website from "../../components/Resources/Website";
import YoutubeChannel from "../../components/Resources/YoutubeChannel";
import DevTool from "../../components/Resources/DevTool";
import Course from "../../components/Resources/Course";
import Game from "../../components/Resources/Game";
import Documentation from "../../components/Resources/Documentation";
import GithubRepo from "../../components/Resources/GithubRepo";
import ProjectTemplate from "../../components/Resources/ProjectTemplate";
import NodeProvider from "../../components/Resources/NodeProvider";
import Blog from "../../components/Resources/Blog";
import Book from "../../components/Resources/Book";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="title">
          Over <span className="highlights">500+ </span>
          Blockchain Development Resources
        </h1>

        <p className="tagline">
          A curated list of beginner-friendly tutorials, how-to-use guides,
          videos, code snippets, best practices etc for Web3 enthusiasts.
        </p>
      </div>

      <div className="filter-section">
        <div className="search-section">
          <div className="dropdown">
            <select name="categories" id="categories">
              <option value="Categories">Categories</option>
              <option value="">a</option>
              <option value="">b</option>
              <option value="">c</option>
              <option value="">d</option>
            </select>
          </div>

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a keyword"
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="featured">
          <div className="brands">
            <h2>Repository As Seen In</h2>
            <img src={DevDaoLogo} alt="developerdao logo" />
            <img src={ImmunefiLogo} alt="immunefi logo" />
            <img src={CadenaLogo} alt="immunefi logo" />
          </div>
        </div>

        <div className="tag-buttons">
          <button id="selected" className="tag ">
            All
          </button>
          <button className="tag">Solidity</button>
          <button className="tag">Web3Js</button>
          <button className="tag">Rust</button>
          <button className="tag">EtherJs</button>
          <button className="tag">Hardhat</button>
          <button className="tag">Vyper</button>
          <button className="tag">Truffle</button>
          <button className="tag">Ethereum</button>
          <button className="tag">Cryptography</button>
          <button className="tag">Polygon</button>
        </div>
      </div>
      <Website />
      <YoutubeChannel />
      <DevTool />
      <Course />
      <Game />
      <Documentation />
      <GithubRepo />
      <ProjectTemplate />
      <NodeProvider />
      <Blog />
      <Book />
    </div>
  );
};

export default Home;
