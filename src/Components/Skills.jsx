import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import jest from "../assets/jest.png";
import postman from "../assets/postman.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
// import npm from "../assets/npm.png";
import nextjs from "../assets/nextjs.png";
import cypress from "../assets/cypress.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-purple-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: nextjs,
      title: "NextJS",
      style: "shadow-gray-400",
    },

    {
      id: 8,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-400",
    },

    {
      id: 9,
      src: jest,
      title: "Jest",
      style: "shadow-orange-400",
    },
  ];

  const back = [
    {
      id: 10,
      src: node,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
  ];

  const extra = [
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: postman,
      title: "PostMan",
      style: "shadow-orange-400",
    },
    {
      id: 15,
      src: cypress,
      title: "Cypress",
      style: "shadow-gray-400",
    },
  ];

  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <div
      name="skills"
      className="bg-gradient-to-b to-gray-900 from-black w-full py-40 pt-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mx-auto">
          <p
            className="text-5xl font-bold border-b-4 border-white inline font-contact"
            data-aos="fade-right"
          >
            Skills
          </p>
        </div>

        <div className="mx-auto pt-16" data-aos="fade-up">
          <h3 className="font-contact text-4xl text-emerald-600 border-b-2 border-emerald-600 inline">
            FrontEnd
          </h3>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center pb-8 pt-10 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg  duration-300 py-4 rounded-lg  ${style} hover:scale-110 rounded-full`}
              data-aos="fade-up"
            >
              <img
                src={src}
                alt=""
                className="mx-auto xxs:w-16 xs:w-16 ss:w-20"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto pt-16" data-aos="fade-up">
          <h3
            className="font-contact text-4xl pt-20 text-emerald-600 border-b-2 border-emerald-600 inline"
            data-aos="fade-up"
          >
            BackEnd
          </h3>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center pb-8 pt-10 px-4 sm:px-0">
          {back.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg  duration-300 py-4 rounded-lg  ${style} hover:scale-110 rounded-full`}
              data-aos="fade-up"
            >
              <img
                src={src}
                alt=""
                className="mx-auto xxs:w-16 xs:w-16 ss:w-20"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto pt-16" data-aos="fade-up">
          <h3
            className="font-contact text-4xl pt-20 text-emerald-600 border-b-2 border-emerald-600 inline"
            data-aos="fade-up"
          >
            Tools I Use
          </h3>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center pb-8 pt-10 px-4 sm:px-0">
          {extra.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-lg  duration-300 py-4 rounded-lg  ${style} hover:scale-110 rounded-full`}
              data-aos="fade-up"
            >
              <img
                src={src}
                alt=""
                className="mx-auto xxs:w-16 xs:w-16 ss:w-20"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
