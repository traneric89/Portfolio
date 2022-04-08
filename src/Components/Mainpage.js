import React from "react";
import { SiGmail } from "react-icons/si";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import ParticleBackground from "./ParticleBackground";

const Mainpage = () => {
  return (
    <div className="bg-gray-600 h-screen flex">
      <ParticleBackground />
      <div className="flex h-screen ml-96 items-center">
        <div className="text-left">
          <h1 className="text-white text-9xl tracking-wide my-5">Eric Tran</h1>
          <h2 className="text-white text-6xl tracking-wide">
            Engineer + Developer
          </h2>
          <div className="flex justify-evenly mt-24">
            <BsGithub className="w-10 h-10 p-1 rounded-lg bg-slate-100 text-blue-900 cursor-pointer" />
            <BsLinkedin className="w-10 h-10 p-1 rounded-lg bg-slate-100 text-blue-900 cursor-pointer" />
            <BsTwitter className="w-10 h-10 p-1 rounded-lg bg-slate-100 text-blue-900 cursor-pointer" />
            <SiGmail className="w-10 h-10 p-1 rounded-lg bg-slate-100 text-blue-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
