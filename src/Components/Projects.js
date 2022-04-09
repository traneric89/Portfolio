import React from "react";
import Weather from "./Weather";
import Store from "./Store";
import MemoryGame from "./MemoryGame";
import FEMG from "./FEMG";

const Projects = () => {
  return (
    <div className="w-4/5 mx-auto mt-32 xl:px-32">
      <h1 className="text-5xl mb-20 tracking-wide font-playfair">Projects</h1>
      <Weather />
      <Store />
      <MemoryGame />
      <FEMG />
    </div>
  );
};

export default Projects;
