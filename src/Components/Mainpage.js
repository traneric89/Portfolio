import React from "react";
import { SiGmail } from "react-icons/si";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import ParticleBackground from "./ParticleBackground";

const Mainpage = () => {
  return (
    <div className="bg-black flex">
      <div className="relative z-10">
        <ParticleBackground />
      </div>
      <div className="flex h-screen w-screen items-center justify-center xl:pr-96 z-10">
        <div className="text-left">
          <h1 className="text-white text-9xl tracking-wide my-5">Eric Tran</h1>
          <h2 className="text-white text-6xl tracking-wide">
            Engineer + Developer
          </h2>
          <div className="flex justify-evenly mt-24">
            <BsGithub className="w-10 h-10 p-1 rounded-lg bg-white  text-black transition ease-in-out hover:-translate-y-1 hover:scale-105 z-50 cursor-pointer" />
            <BsLinkedin className="w-10 h-10 p-1 rounded-lg bg-white text-blue-600 transition ease-in-out hover:-translate-y-1 hover:scale-105 z-50 cursor-pointer" />
            <BsTwitter className="w-10 h-10 p-1 rounded-lg bg-white text-blue-400 transition ease-in-out hover:-translate-y-1 hover:scale-105 z-50 cursor-pointer" />
            <SiGmail className="w-10 h-10 p-1 rounded-lg bg-white text-red-500 transition ease-in-out hover:-translate-y-1 hover:scale-105 z-50 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
