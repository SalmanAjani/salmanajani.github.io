import React, { useEffect } from "react";
import heroImg2 from "../assets/heroImg2.png";
import Typewriter from "typewriter-effect";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

  return (
    <div
      name="home"
      id="home"
      className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white max-w-screen h-400 pt-36 pb-20 md:pb-24  
      font-contact flex flex-col-reverse items-center md:flex md:flex-row md:justify-evenly md:gap-x-6 md:pt-48 px-2 md:mx-12 xl:px-64"
    >
      {/* Intro */}
      <div
        className="text-4xl md:text-5xl mt-6 font-extrabold mb-6 px-8 text-center md:text-left md:w-7/12 lg:w-5/12"
        data-aos="fade-down"
      >
        <h2>Hi!</h2>
        <div className="text-rose-500 mt-4">
          <Typewriter
            options={{
              strings: ["I'm Salman Ajani"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
        <h3 className="text-3xl mt-4 font-normal sm:w-10/12 sm:m-auto sm:mt-4 md:m-0 md:mt-4">
          An Aspiring Full Stack Developer looking to build quality products by
          working in a fast-paced environment.
        </h3>
      </div>

      {/* Image */}
      <div
        className="bg-gradient-to-b from-gray-900 to-gray-800 dark:bg-gradient-to-b dark:from-white dark:to-gray-300 rounded-[40px] mx-8 shadow-md shadow-rose-500"
        data-aos="fade-down"
      >
        <img src={heroImg2} alt="hero" width={400} />
      </div>
    </div>
  );
};

export default Home;
