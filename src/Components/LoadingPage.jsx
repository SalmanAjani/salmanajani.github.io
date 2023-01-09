import React from "react";
import slice from "../assets/slice.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const LoadingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full min-h-screen mx-auto bg-black ">
      <div className="max-w-screen-lg flex flex-col items-center justify-center m-auto pt-32 md:pt-[5%]">
        <img
          src={slice}
          className="w-8/12 md:w-6/12"
          alt=""
          data-aos="fade-down"
        />
        <div className="m-auto" data-aos="fade-up">
          <h1 className="text-5xl text-white font-contact ml-2 capitalize">
            Salman Ajani
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
