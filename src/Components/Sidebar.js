import React from "react";
import { SiGmail } from "react-icons/si";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="absolute">
      <div className="w-2/4 p-4 bg-white">
        <img src={require("../images/logo-transparent.png")} alt="" />
      </div>
      <div>
        <BsGithub />
        <BsLinkedin />
        <BsTwitter />
        <SiGmail />
      </div>
    </div>
  );
};

export default Sidebar;
