import React from "react";
import Mainpage from "./Components/Mainpage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div>
      <Mainpage className="z-10" />
      <div className="absolute w-full bg-slate-100 z-50">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default App;
