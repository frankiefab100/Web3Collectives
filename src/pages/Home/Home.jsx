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
import { websites } from "../../data/websites";
import { books } from "../../data/books";
import { courses } from "../../data/courses";
import { devTools } from "../../data/devTools";
import { games } from "../../data/games";
import { documentations } from "../../data/documentations";
import { githubRepos } from "../../data/githubRepos";
import { projectTemplates } from "../../data/projectTemplates";
import { youtubeChannels } from "../../data/youtubeChannels";
import { rpcNodes } from "../../data/rpcNodes";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [resources, setResources] = useState({
    websites: websites,
    youtubeChannels: youtubeChannels,
    githubRepos: githubRepos,
    games: games,
    devTools: devTools,
    courses: courses,
    projectTemplates: projectTemplates,
    documentations: documentations,
    books: books,
    rpcNodes: rpcNodes,
  });

  //SEARCH KEY
  const searchKey = searchTerm.trim();

  const filterWebsites = resources.websites.filter(
    (resourceItem) =>
      resourceItem.title
        .toLowerCase()
        .includes(searchKey.toLocaleLowerCase()) ||
      resourceItem.description
        .toLowerCase()
        .includes(searchKey.toLocaleLowerCase()) ||
      resourceItem.keywords
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey) ||
      resourceItem.tag
        .map((elem) => elem.toLowerCase().trim())
        .includes(searchKey) ||
      searchTerm === "",
  );

  // console.log(filterItems);

  const handleSearch = (e) => {
    // // setSearchTerm(e.target.value);
    // const newWord = resources.filter((item) =>
    //   item.forEach((item) =>
    //     item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    //   ),
    // );
    // if (e.target.value === "") {
    //   setResources([]);
    // } else {
    //   setResources(newWord);
    // }
  };

  const searchProps = {
    searchTerm,
    setSearchTerm,
    handleSearch,
  };

  return (
    <div className="home">
      <Hero />

      {/* -- Search Filter section -- */}
      <SearchFilter {...searchProps} />

      {/* -- Resources section -- */}
      <Website resources={filterWebsites} />
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
