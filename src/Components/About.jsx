import React, { useEffect } from "react";
import gif1 from "../assets/gif1.gif";
import Top from "./Top";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <Top />
      </div>
      <div
        name="about"
        id="about"
        className="text-xl h-400 max-w-screen bg-white font-contact content-center flex flex-col-reverse items-center md:flex-row md:justify-evenly pt-4 md:pt-20 pb-20 md:pb-24 dark:bg-gray-900
      dark:text-white px-6 lg:px-24"
      >
        {/* Left */}
        <div
          className="mt-12 bg-gradient-to-b from-gray-900 to-gray-800 dark:bg-gradient-to-b dark:from-white dark:to-gray-300s mx-8 
          border-2 border-gray-900 dark:border-white"
          data-aos="fade-down"
        >
          <img src={gif1} alt="hero-2" width={400} height={400} />
        </div>

        {/* Right */}
        <div className="mx-10 md:mx-24 md:w-3/6" data-aos="fade-down">
          <h2 className="font-extrabold text-2xl text-center mb-6 text-rose-500">
            ABOUT ME
          </h2>
          <p className="text-[16px]">
            I got introduced to coding pretty late comparatively. It was always
            something I wanted to learn but having graduated with a Bachelor's
            degree in Business Administration it made sense to just continue on
            in that field.
            <br />
            Hence the idea of learning to code just got pushed back. But when
            COVID hit, and the world came to a stop, I finally got the chance I
            wanted.
          </p>
          <br />
          <p className="text-[16px]">
            I joined the coding bootcamp for Full Stack Web Development at Masai
            School and started learning. I learned all the basics and then
            started making my own websites. I worked on different collaborative
            projects with fellow batchmates and even learned Data Structures and
            Algorithms. Everything you see in the projects section is what I've
            built/worked on from scratch in the past 8 months.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
