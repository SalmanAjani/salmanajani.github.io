import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Top from "./Top";
import gif3 from "../assets/gif3.gif";
import gif2 from "../assets/gif2.gif";

const About = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div
      name="about"
      className="max-w-screen pb-40 md:pb-28 lg:py-10 bg-gradient-to-b from-emerald-400 to-emerald-300 text-emerald-900"
    >
      <div className="hidden md:block ">
        <div>
          <Top />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-2 text-center mb-16 pt-36">
        <p
          className="text-5xl font-contact capitalize font-bold inline border-b-4 border-emerald-900"
          data-aos="fade-up"
        >
          About
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <img className="mx-auto" src={gif3} alt="logo" data-aos="fade-up" />
        <img className="mx-auto" src={gif2} alt="logo" data-aos="fade-up" />
      </div>

      <div className="max-w-screen-lg mx-auto px-6">
        <p className="mt-6 text-2xl text-black" data-aos="fade-right">
          I got introduced to coding pretty late comparatively. It was always
          something I wanted to learn but having graduated with a Bachelor's
          degree in Business Administration it made sense to just continue on in
          that field. Hence the idea of learning to code just got pushed back.
          But when COVID hit, and the world came to a stop, I finally got the
          chance I wanted.
        </p>

        <p className="mt-6 text-2xl text-black" data-aos="fade-left">
          I joined the coding bootcamp for Full Stack Web Development at Masai
          School and started learning. I learned all the basics and then started
          making my own websites. I worked on different collaborative projects
          with fellow batchmates and even learned Data Structures and
          Algorithms. Everything you see in the projects section is what I've
          build/worked on from scratch in the past 8 months.
        </p>
      </div>
    </div>
  );
};

export default About;
