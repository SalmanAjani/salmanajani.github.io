import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pb-10">
        <div className="flex flex-col justify-center h-full sm:ml-8">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi! I'm Salman Ajani.
          </h2>
          <h3 className="mt-5 text-3xl sm:text-4xl font-bold text-white">
            And I like to code.
          </h3>
          <p className="text-white py-4 max-w-md text-xl">
            Full Stack Developer
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-900 to-emerald-600 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="border-2 rounded-2xl">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
