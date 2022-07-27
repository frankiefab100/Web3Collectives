import React, { useState } from "react";
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
import Categories from "../../data/categories.json";
import "./Home.css";

const Home = () => {
  // const [search, setSearch] = useState("");

  const [resources, setResources] = useState({
    allResource: Categories,
    selectedResources: [],
  });

  const filterButtons = [
    "All",
    "Solidity",
    "Web3Js",
    "Rust",
    "EtherJs",
    " Hardhat",
    "Vyper",
    "Truffle",
    "Ethereum",
    "Cryptography",
    "Polygon",
  ];

  const handleFilter = (e) => {
    let selectedResources;

    if (e.target.value === "All") {
      selectedResources = resources.selectedResources;
    } else {
      selectedResources = resources.allResource.filter(
        (item) => item.keywords === e.target.value
      );
    }
  };

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
          {filterButtons.map((btn, index) => {
            return (
              <button
                key={index}
                onClick={handleFilter}
                value={btn}
                // id={filterButtons.value == "All" ? "selected" : ""}
                className="tag"
              >
                {btn}
              </button>
            );
          })}
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
