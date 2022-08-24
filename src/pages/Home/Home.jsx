import React, { useState } from "react";
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
import "./Home.css";
import { websites as sites } from "../../data/websites";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  //since they are imported direclty, there is no need to call useEffect
  const [websites, setWebsites] = useState(sites);

  //SEARCH KEY
  const searchKey = searchTerm.trim();

  //Search functionality for websites
  // This search works while user types
  const filteredWebsites = websites.filter(
    (sites) =>
      sites.title.toLowerCase().includes(searchKey.toLocaleLowerCase()) ||
      sites.description.toLowerCase().includes(searchKey.toLocaleLowerCase()) ||
      sites.keywords
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey) ||
      sites.tag.map((elem) => elem.toLowerCase().trim()).includes(searchKey) ||
      searchTerm === "",
  );

  const handleSearch = () => {
    //TODO
    //Handle the searching
  };

  const searchProps = {
    searchTerm,
    setSearchTerm,
    handleSearch,
  };

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
      <SearchFilter {...searchProps} />

      {/* -- Resources section -- */}
      <Website websites={filteredWebsites} />
      <YoutubeChannel />
      <DevTool />
      <Course />
      <Game />
      <Documentation />
      <GithubRepo />
      <ProjectTemplate />
      <NodeProvider />
      <Book />
    </div>
  );
};

export default Home;
