import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const MemoryGame = () => {
  return (
    <div>
      <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-400 mb-20">
        <div>
          <img
            src={require("../images/memory_game_ss.png")}
            alt="Memory Game"
            className="rounded-xl"
          />
        </div>
        <div className="text-right mt-2">
          <a href="https://github.com/traneric89/Memory-Game" target="_blank">
            <BsGithub className="inline w-5 h-5 mr-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
          </a>
          <a href="https://traneric89.github.io/Memory-Game/" target="_blank">
            <FiExternalLink className="inline w-5 h-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
          </a>
        </div>
        <div className="px-16 text-center">
          <h2 className="mb-3 text-3xl tracking-wide">NBA Memory Game</h2>
          <div className="my-5">
            <span className="bg-orange-100 text-black p-1.5 rounded-2xl text-sm mx-2">
              Javacript
            </span>
            <span className="bg-orange-100 text-black p-1.5 rounded-2xl text-sm mx-2">
              React
            </span>
            <span className="bg-orange-100 text-black p-1.5 rounded-2xl text-sm mx-2">
              UseEffect
            </span>
          </div>
          <div className=" w-3/4 mx-auto">
            <p className="leading-8 text-lg">
              A fun and playful game that tests your memory of NBA teams!
              Players must click on a team logo but never the same logo twice.
              The application keeps track of the current score as well as the
              session high score using UseState and UseEffect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
