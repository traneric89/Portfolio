import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const FEMG = () => {
  const { ref, inView } = useInView({
    threshhold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0.001,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "+100vw",
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-400 mb-20"
      >
        <div>
          <img
            src={require("../images/femg_ss.png")}
            alt="Formula EMG"
            className="rounded-xl"
          />
        </div>
        <div className="text-right mt-2">
          <a href="https://github.com/traneric89/FEMG" target="_blank">
            <BsGithub className="inline w-5 h-5 mr-2 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
          </a>
          <a href="https://traneric89.github.io/FEMG/" target="_blank">
            <FiExternalLink className="inline w-5 h-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105" />
          </a>
        </div>
        <div className="px-0 text-center">
          <h2 className="mb-3 text-2xl md:text-3xl tracking-wide">
            Formula EMG
          </h2>
          <div className="flex justify-center my-5">
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
            <p className="leading-8 text-lg">
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
      </motion.div>
    </div>
  );
};

export default FEMG;
