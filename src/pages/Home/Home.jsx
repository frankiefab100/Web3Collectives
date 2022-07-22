import React from "react";
import { FaSearch } from "react-icons/fa";
import DevDaoLogo from "../../assets/images/DeveloperDAO.png";
import ImmunefiLogo from "../../assets/images/Immunefi.png";
import CadenaLogo from "../../assets/images/Cadena.png";
import YoutubeChannel from "../../components/Resources/YoutubeChannel";
import "./Home.css";
import Website from "../../components/Resources/Website";

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

        <div className="search-section">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a keyword"
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="dropdowns">
          <span className="sub-tagline">
            Browse our library of Free Web3 lessons
          </span>
          <select name="categories" id="categories">
            <option value="Categories">Categories</option>
            <option value="">b</option>
            <option value="">c</option>
            <option value="">d</option>
          </select>

          <select name="level" id="level">
            <option value="">Experience Level</option>
            <option value="">b</option>
            <option value="">c</option>
            <option value="">d</option>
          </select>
        </div>

        <div className="featured">
          <div className="brands">
            <h2>As See In</h2>
            <img src={DevDaoLogo} alt="developerdao logo" />
            <img src={ImmunefiLogo} alt="immunefi logo" />
            <img src={CadenaLogo} alt="immunefi logo" />
          </div>
        </div>
      </div>
      <YoutubeChannel />
      <Website />
    </div>
  );
};

export default Home;
