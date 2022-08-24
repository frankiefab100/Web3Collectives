import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchFilter.css";

const SearchFilter = ({ searchTerm, setSearchTerm, handleSearch }) => {
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
        <button className="search-btn" onClick={handleSearch}>
          Search
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
