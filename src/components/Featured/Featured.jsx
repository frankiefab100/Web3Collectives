import React from "react";
import DevDaoLogo from "../../assets/images/DeveloperDAO.png";
import ImmunefiLogo from "../../assets/images/Immunefi.png";
import CadenaLogo from "../../assets/images/Cadena.png";

import DevDaoLogoLight from "../../assets/images/DeveloperDAO-white.png";
import ImmunefiLogoLight from "../../assets/images/Immunefi-white.png";
import CadenaLogoLight from "../../assets/images/Cadena-white.png";
import "./Featured.css";

const Featured = ({ theme, toggleTheme }) => {
  return (
    <div className="featured">
      <div className="brands">
        <h2>Repository As Seen In</h2>

        <img
          src={theme ? DevDaoLogo : DevDaoLogoLight}
          alt="developerdao logo"
        />
        <img
          src={toggleTheme === "checked" ? ImmunefiLogoLight : ImmunefiLogo}
          alt="immunefi logo"
        />
        <img
          src={toggleTheme ? CadenaLogoLight : CadenaLogo}
          alt="immunefi logo"
        />
      </div>
    </div>
  );
};

export default Featured;
