import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="filter-section">
      <div className="search-section">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="input-cta search-btn" onClick={handleSearch}>
          Search
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
