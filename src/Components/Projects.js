import React from "react";

const Projects = () => {
  return (
    <div className="w-4/5 mx-auto mt-32 px-56">
      <h1 className="text-4xl mb-20 tracking-wide">Projects</h1>
      <div className="flex bg-white p-12  rounded-3xl shadow-xl shadow-gray-400">
        <div className="bg-gray-200 w-2/4">
          <img
            src={require("../images/weather_app_ss.png")}
            alt=""
            className=" rounded-2xl"
          />
        </div>
        <div className="pl-12">
          <h2>Weather App</h2>
          <p>
            Weather application that displays current weather of any searched
            city. Data is fetched using WeatherAPI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
