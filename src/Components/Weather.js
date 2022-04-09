import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const Weather = () => {
  return (
    <div>
      <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-400 mb-20">
        <div>
          <img
            src={require("../images/weather_app_ss.png")}
            alt="Weather App"
            className="rounded-xl"
          />
        </div>
        <div className="text-right mt-2">
          <BsGithub className="inline w-5 h-5 mr-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
          <FiExternalLink className="inline w-5 h-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
        </div>
        <div className="px-16 mt-8 text-center">
          <h2 className="mb-3 text-2xl tracking-wide">Weather App</h2>
          <div className="my-5">
            <span className="bg-blue-500 text-white p-1.5 rounded-2xl text-sm mx-2">
              Javascript
            </span>
            <span className="bg-blue-500 text-white p-1.5 rounded-2xl text-sm mx-2">
              Webpack
            </span>
            <span className="bg-blue-500 text-white p-1.5 rounded-2xl text-sm mx-2">
              WeatherAPI
            </span>
          </div>
          <div className=" w-3/4 mx-auto">
            <p className="leading-8">
              Weather application that displays current weather of any searched
              city. Data is fetched using WeatherAPI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
