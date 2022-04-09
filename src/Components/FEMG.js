import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const FEMG = () => {
  return (
    <div>
      <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-400 mb-20">
        <div>
          <img
            src={require("../images/femg_ss.png")}
            alt="Formula EMG"
            className="rounded-xl"
          />
        </div>
        <div className="text-right mt-2">
          <BsGithub className="inline w-5 h-5 mr-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
          <FiExternalLink className="inline w-5 h-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
        </div>
        <div className="px-16 mt-8 text-center">
          <h2 className="mb-3 text-2xl tracking-wide">Formula EMG</h2>
          <div className="my-5">
            <span className="bg-red-400 text-white p-1.5 rounded-2xl text-sm mx-2">
              NodeJS
            </span>
            <span className="bg-red-400 text-white p-1.5 rounded-2xl text-sm mx-2">
              Express
            </span>
            <span className="bg-red-400 text-white p-1.5 rounded-2xl text-sm mx-2">
              Socket.IO
            </span>
          </div>
          <div className=" w-3/4 mx-auto">
            <p className="leading-8">
              This application was created for my Engineering Capstone Project.
              An RC car was custom built to function based off of real human
              electromyography (EMG) signals. This web application displays the
              player's name and lap time and sorts by fastest lap encouraging
              competition between participants. Data is sent from an ultrasonic
              sensor connected with an Arduino to a backend NodeJS server. The
              values are then served client-side using Express and Socket.IO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FEMG;
