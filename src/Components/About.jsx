import React from "react";
import benchwork from "../assets/working.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Top from "./Top";

const About = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div
      name="about"
      className=" w-full h-full pb-20 md:pb-28 lg:py-10 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="hidden md:block ">
        <div>
          <Top />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-2 text-center mb-2 pt-36">
        <p
          className="text-5xl font-contact capitalize font-bold inline border-b-4 border-white"
          data-aos="fade-up"
        >
          About
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 pt-4 ">
        <div className="hidden relative lg:block lg:mt-20 ">
          <img
            className="absolute inset-0 w-9/12 h-9/12 object-cover object-center rounded-xl items-center "
            src={benchwork}
            alt="logo"
            data-aos="fade-up"
          />
        </div>

        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl md:my-2 lg:my-20 xl:my-20 lg:px-2 lg:py-4 lg:max-w-screen-lg ">
          <img
            className="rounded-lg shadow-xl sm:mt-3 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            src={benchwork}
            alt="logo"
            data-aos="fade-up"
          />
          <div className="md:mx-auto">
            <p
              className="mt-12 md:mt-12 text-2xl  text-gray-600 "
              data-aos="fade-down"
            >
              I am Result-oriented full-stack web developer, passionate about
              developing user-friendly web applications using MERN Stack.
            </p>

            <p className="mt-6 text-2xl  text-gray-600 " data-aos="fade-left">
              I enjoy developing websites and a keen interest in solving
              problems and coming up with effective solutions.
            </p>

            <p className="mt-6 text-2xl  text-gray-600 " data-aos="fade-up">
              Eager to be a part of a team which gives me ability to learn and
              grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
