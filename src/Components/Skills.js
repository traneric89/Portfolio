import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiWebpack,
  SiRedux,
  SiJest,
} from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaNpm } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-4/5 mx-auto mt-32 xl:px-32">
      <h1 className="text-5xl mb-20 tracking-wide">Skills</h1>
      <div className="grid grid-cols-4 gap-8 bg-white py-16 rounded-3xl shadow-xl shadow-gray-400">
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiHtml5 className="w-11 h-11 text-orange-600 " />
          <p className="tracking-wide text-sm mt-1">HTML5</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiCss3 className="w-11 h-11 text-blue-500" />
          <p className="tracking-wide text-sm mt-1">CSS3</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiJavascript className="w-11 h-11 text-yellow-300" />
          <p className="tracking-wide text-sm mt-1">Javascript</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiReact className="w-11 h-11 text-sky-400" />
          <p className="tracking-wide text-sm mt-1">React</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <FaNodeJs className="w-11 h-11 text-green-600" />
          <p className="tracking-wide text-sm mt-1">NodeJS</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiTailwindcss className="w-11 h-11 text-sky-400" />
          <p className="tracking-wide text-sm mt-1">Tailwind</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiExpress className="w-11 h-11 text-black" />
          <p className="tracking-wide text-sm mt-1">Express</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiJest className="w-11 h-11 text-red-900" />
          <p className="tracking-wide text-sm mt-1">Jest</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiWebpack className="w-11 h-11 text-sky-400" />
          <p className="tracking-wide text-sm mt-1">Webpack</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <SiRedux className="w-11 h-11 text-purple-600" />
          <p className="tracking-wide text-sm mt-1">Redux</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <FaGitAlt className="w-11 h-11 text-orange-600" />
          <p className="tracking-wide text-sm mt-1">Git</p>
        </div>
        <div className="flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-105">
          <FaNpm className="w-11 h-11 text-red-600" />
          <p className="tracking-wide text-sm mt-1">npm</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
