import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
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
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";
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
import Featured from "../../components/Featured/Featured";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

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

  const filterYoutubes = resources.youtubeChannels.filter(
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

  const filterBooks = resources.books.filter(
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

  const filterRepos = resources.githubRepos.filter(
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

  const filterGames = resources.games.filter(
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

  const filterDevTools = resources.devTools.filter(
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

  const filterCourses = resources.courses.filter(
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

  const filterTemplates = resources.projectTemplates.filter(
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

  const filterDocs = resources.documentations.filter(
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

  const filterNodes = resources.rpcNodes.filter(
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

      {/* -- Search section -- */}
      <Search {...searchProps} />

      <div className="filter-sort">
        <Filter />
        <Sort />
      </div>

      {/* -- Resources section -- */}
      <Website resources={filterWebsites} />
      <YoutubeChannel resources={filterYoutubes} />
      <DevTool resources={filterDevTools} />
      <Course resources={filterCourses} />
      <Game resources={filterGames} />
      <Documentation resources={filterDocs} />
      <GithubRepo resources={filterRepos} />
      <ProjectTemplate resources={filterTemplates} />
      <NodeProvider resources={filterNodes} />
      <Book resources={filterBooks} />

      <Featured />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
