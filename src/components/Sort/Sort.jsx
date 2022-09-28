import React from "react";
import { BsSortDownAlt } from "react-icons/bs";
import "./Sort.css";

const Sort = () => {
  return (
    <div className="sort-resources">
      <select>
        {BsSortDownAlt}
        <option>Sort {BsSortDownAlt}</option>
      </select>
    </div>
  );
};

export default Sort;
