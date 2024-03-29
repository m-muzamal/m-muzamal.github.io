import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
        <a href="https://linkedin.com" rel="noreferrer" target="_blank">
          {" "}
          <BsLinkedin />{" "}
        </a>
        <a href="https://www.instagram.com/mzml_0/" rel="noreferrer" target="_blank">
          {" "}
          <BsInstagram />{" "}
        </a>
        <a href="https://github.com" rel="noreferrer" target="_blank">
          {" "}
          <BsGithub />{" "}
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
