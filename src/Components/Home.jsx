/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import heroImg2 from "../assets/heroImg2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className="bg-gray-100 w-full pt-48 pb-24 font-contact flex flex-col-reverse items-center md:flex md:flex-row md:justify-center md:py-56 px-12 lg:px-16"
    >
      {/* Intro */}
      <div className="text-4xl mt-8 md:mt-0 md:text-6xl text-center md:text-left md:w-6/12 lg:w-5/12 text-neutral-800">
        <h2 className="font-bold">Full Stack Developer</h2>
        <h3 className="text-xl mt-8 font-normal sm:w-8/12 sm:m-auto sm:mt-4 md:m-0 md:mt-4 md:w-10/12 text-neutral-600">
          Hi, I'm Salman Ajani. A passionate Full Stack Developer based in
          Bangalore, India. 📍
        </h3>
        <div className="flex justify-center mt-8 gap-4 md:justify-start">
          <a
            href="https://www.linkedin.com/in/salmanajani26/"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/SalmanAjani"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="bg-neutral-800 dark:bg-gradient-to-b pr-[14px] rounded-md">
        <img src={heroImg2} alt="hero" width={400} />
      </div>
    </div>
  );
};

export default Home;
