import React from "react";
import { SiGmail } from "react-icons/si";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import ParticleBackground from "./ParticleBackground";

const Mainpage = () => {
  return (
    <div className="bg-black flex">
      <div className="relative cursor-pointer">
        <ParticleBackground />
      </div>
      <div className="flex h-screen w-screen pl-96 items-center">
        <div className="text-left">
          <h1 className="text-white text-9xl tracking-wide my-5">Eric Tran</h1>
          <h2 className="text-white text-6xl tracking-wide">
            Engineer + Developer
          </h2>
          <div className="flex justify-evenly mt-24">
            <BsGithub className="w-10 h-10 p-1 rounded-lg bg-white  text-black" />
            <BsLinkedin className="w-10 h-10 p-1 rounded-lg bg-white text-blue-600" />
            <BsTwitter className="w-10 h-10 p-1 rounded-lg bg-white text-blue-400" />
            <SiGmail className="w-10 h-10 p-1 rounded-lg bg-white text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
