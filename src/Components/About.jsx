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
              className="mt-6 md:mt-4 text-xl  text-gray-500 "
              data-aos="fade-down"
            >
              I got introduced to coding pretty late comparatively. It was
              always something I wanted to learn but having graduated with a
              Bachelor's degree in Business Administration it made sense to just
              continue on in that field. Hence the idea of learning to code just
              got pushed back. But when COVID hit, and the world came to a stop,
              I finally got the chance I wanted.
            </p>

            <p className="mt-6 text-xl  text-gray-500 " data-aos="fade-left">
              I joined the coding bootcamp for Full Stack Web Development at
              Masai School and started learning. I learned all the basics and
              then started making my own websites. I worked on different
              collaborative projects with fellow batchmates and even learned
              Data Structures and Algorithms. Everything you see in the projects
              section is what I've build/worked on from scratch in the past 8
              months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
