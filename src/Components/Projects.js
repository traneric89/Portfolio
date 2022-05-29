import React from "react";
import Weather from "./Weather";
import Store from "./Store";
import MemoryGame from "./MemoryGame";
import FEMG from "./FEMG";
import Firetracker from "./Firetracker";

const Projects = () => {
  return (
    <div className="w-4/5 mx-auto mt-32 2xl:px-32 overflow-x-hidden">
      <h1 className="text-5xl mb-20 tracking-wide font-playfair">Projects</h1>
      <Firetracker />
      <Store />
      <MemoryGame />
      <FEMG />
    </div>
  );
};

export default Projects;
