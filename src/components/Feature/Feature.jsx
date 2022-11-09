import React from "react";
import DevDaoLogo from "../../assets/images/DeveloperDAO.png";
import ImmunefiLogo from "../../assets/images/Immunefi.png";
import CadenaLogo from "../../assets/images/Cadena.png";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="featured">
      <h2>Repository As Seen In</h2>
      <div className="brands">
        <img src={DevDaoLogo} alt="developerdao logo" />
        <img src={ImmunefiLogo} alt="immunefi logo" />
        <img src={CadenaLogo} alt="immunefi logo" />
      </div>
    </div>
  );
};

export default Feature;
