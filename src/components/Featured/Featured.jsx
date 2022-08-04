import React from "react";
import DevDaoLogo from "../../assets/images/DeveloperDAO.png";
import ImmunefiLogo from "../../assets/images/Immunefi.png";
import CadenaLogo from "../../assets/images/Cadena.png";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="brands">
        <h2>Repository As Seen In</h2>
        <img src={DevDaoLogo} alt="developerdao logo" />
        <img src={ImmunefiLogo} alt="immunefi logo" />
        <img src={CadenaLogo} alt="immunefi logo" />
      </div>
    </div>
  );
};

export default Featured;
