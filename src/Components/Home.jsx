/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import HeroImage from "../assets/heroImage.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-quad",
      delay: 100,
    });
  }, []);

  return (
    <div
      name="home"
      className="max-w-screen md:w-full mx-auto pt-20 lg:pt-40 pb-2 bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-400 font-contact"
    >
      <div className="max-w-screen md:max-w-screen-md mx-auto grid lg:grid-cols-2 items-center">
        <div className="max-w-screen-lg mx-auto ">
          <div
            // className="max-w-screen-sm flex justify-center items-center space-x-8"

            data-aos="fade-up"
          >
            <div className="xxs:mt-8 lg:mt-0">
              <img
                className="mx-auto rounded-full w-4/12 object-cover object-center xxs:w-6/12 xs:w-5/12 sm:w-5/12 md:w-6/12 lg:w-7/12 "
                src={HeroImage}
                alt="logo"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>

        <div
          className="px-8 py-12 max-w-lg mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-black my-3 ss:text-4xl text-center xs:text-4xl border-r-2 border-l-2 border-black px-2">
            Hi!
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-emerald-800 my-3 ss:text-4xl xs:text-4xl text-center border-r-2 border-l-2 border-black px-4">
            I'm Salman Ajani.
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-black my-3 ss:text-4xl xs:text-4xl text-center border-r-2 border-l-2 border-black px-4">
            And I like to code.
          </h2>
        </div>
      </div>
      <p className="text-black text-2xl py-4 font-medium max-w-screen-sm text-center mx-auto">
        An Aspiring Full Stack Developer looking to build quality products by
        working in a fast-paced environment.
      </p>
    </div>
  );
};

export default Home;
