import React from "react";
import Sidebar from "./Sidebar";

const Mainpage = () => {
  return (
    <div className="bg-gray-600 h-screen">
      <Sidebar />
      <div className="flex h-screen justify-center items-center">
        <div className="text-left">
          <h1 className="text-white text-9xl tracking-wide my-5">Eric Tran</h1>
          <h2 className="text-white text-6xl tracking-wide">
            Engineer + Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
