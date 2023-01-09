import React, { useEffect } from "react";
import final1 from "../assets/final1.png";
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
      className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white max-w-screen h-400 pt-24 pb-20 md:pb-24  
      font-contact flex flex-col items-center gap-4 px-6"
    >
      {/* Intro */}
      <div
        className="text-4xl md:text-5xl mt-6 font-extrabold leading-tight pr-[28vw]"
        data-aos="fade-down"
      >
        <h2>Hi!</h2>
        <div className="text-rose-500">
          <Typewriter
            options={{
              strings: ["I'm Salman Ajani"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
        <h2>And I like to code!</h2>
      </div>

      {/* Image */}
      <div
        className="bg-gradient-to-b from-gray-900 to-gray-800 dark:bg-gradient-to-b dark:from-white dark:to-gray-300 rounded-[80px] shadow-md shadow-rose-500"
        data-aos="fade-down"
      >
        <img src={final1} alt="hero" />
      </div>

      {/* Intro-2 */}
      <div
        className="rounded-md p-6 xxs:w-3/3 xs:w-2/3 sm:w-6/12 lg:w-1/3 bg-rose-500 text-white text-center ml-[32vw] relative -mt-[4vh] md:ml-[42vw] text-md sm:text-xl"
        data-aos="fade-down"
      >
        <h2>
          An Aspiring Full Stack Developer looking to build quality products by
          working in a fast-paced environment.
        </h2>
      </div>
    </div>
  );
};

export default Home;
