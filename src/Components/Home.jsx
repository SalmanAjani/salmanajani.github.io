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
      className="max-w-screen md:w-full mx-auto pt-20 lg:pt-40 pb-2 bg-gradient-to-b from-black via-black to-gray-900 font-contact"
    >
      <div className="max-w-screen md:max-w-screen-md mx-auto grid lg:grid-cols-2 items-center">
        <div
          className="px-8 py-12 max-w-lg mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white my-3 ss:text-4xl xs:text-4xl">
            Hi!
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-emerald-800 my-3 ss:text-4xl xs:text-4xl">
            I'm Salman Ajani.
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white my-3 ss:text-4xl xs:text-4xl">
            And I like to code.
          </h2>
          <p className="text-gray-500 text-xl py-4 font-medium max-w-screen-sm">
            An Aspiring Full Stack Developer looking to build quality products
            by working in a fast-paced environment.
          </p>

          <div className="max-w-screen-lg mx-auto ">
            <div
              // className="max-w-screen-sm flex justify-center items-center space-x-8"
              data-aos="fade-up"
            >
              <div>
                <a
                  href="https://drive.google.com/u/0/uc?id=1We9ytnoF1n0U6Is59-933y8CUCnQTWCE&export=download"
                  smooth
                  className="group text-white w-fit px-6 py-2 my-2 text-[20px] overflow-hidden flex items-center rounded-md bg-gradient-to-r from-emerald-700 to-emerald-900 cursor-pointer mx-auto"
                >
                  Check Out My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="mx-auto rounded-2xl w-4/12 object-cover object-center xxs:w-6/12 xs:w-5/12 sm:w-4/12 md:w-3/12 lg:w-6/12 border-2 border-white "
          src={HeroImage}
          alt="logo"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Home;
