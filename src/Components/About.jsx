import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full py-40 bg-gradient-to-b from-emerald-50 via-emerald-50 to-emerald-100 text-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            About
          </p>
        </div>
        <div className="text-white mt-16 bg-gradient-to-r from-emerald-900 to-emerald-600 rounded-xl ">
          <p className="text-xl shadow-xl p-10">
            I got introduced to coding pretty late comparatively. It was always
            something I wanted to learn but having graduated with a Bachelor's
            degree in Business Administration it made sense to just continue on
            in that field. Hence the idea of learning to code just got pushed
            back. But when COVID hit, and the world came to a stop, I finally
            got the chance I wanted.
          </p>
        </div>

        <br />
        <div className="text-white bg-gradient-to-r from-emerald-900 to-emerald-600 rounded-xl">
          <p className="text-xl shadow-xl p-10">
            I joined the coding bootcamp for Full Stack Web Development at Masai
            School and started learning. I learned all the basics and then
            started making my own websites. I worked on different collaborative
            projects with fellow batchmates and even learned Data Structures and
            Algorithms. Everything you see in the projects section is what I've
            build/worked on from scratch in the past 8 months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
