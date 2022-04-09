import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const Store = () => {
  return (
    <div>
      <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-400 mb-20">
        <div>
          <img
            src={require("../images/store_ss.png")}
            alt="Online Store"
            className="rounded-xl"
          />
        </div>
        <div className="text-right mt-2">
          <BsGithub className="inline w-5 h-5 mr-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
          <FiExternalLink className="inline w-5 h-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
        </div>
        <div className="px-16 mt-8 text-center">
          <h2 className="mb-3 text-2xl tracking-wide">Slope Shredders</h2>
          <div className="my-5">
            <span className="bg-black text-white p-1.5 rounded-2xl text-sm mx-2">
              Javascript
            </span>
            <span className="bg-black text-white p-1.5 rounded-2xl text-sm mx-2">
              React
            </span>
            <span className="bg-black text-white p-1.5 rounded-2xl text-sm mx-2">
              React Router
            </span>
          </div>
          <div className=" w-3/4 mx-auto">
            <p className="leading-8">
              A one stop shop web application for snowboarding gear including
              goggles and snowboards. The application has a clean landing page
              and navigates seamlessely using React Router. Users can add items
              to cart and filter products as well as update the quantity of
              their items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
