import React, { useEffect } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import typescript from "../assets/typescript.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import nextjs from "../assets/nextjs.png";
import { Timeline } from "flowbite-react";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

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
      src: node,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      id="skills"
      className="max-w-screen pt-4 md:pt-20 pb-20 md:pb-24 bg-white dark:bg-gray-900 flex flex-col-reverse items-center font-contact md:flex-row md:justify-evenly md:px-24 md:gap-x-12 xl:px-64"
    >
      {/* Left Side */}
      <div className="mt-16 w-8/12 lg:w-6/12" data-aos="fade-down">
        <h2 className="text-2xl text-rose-500 mb-8 font-extrabold text-center md:text-left">
          EDUCATION
        </h2>
        <div>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>June 2022 - Feb 2023</Timeline.Title>
                <Timeline.Title>Masai School</Timeline.Title>
                <Timeline.Title>Full Stack Web Development</Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>July 2016 - March 2019</Timeline.Title>
                <Timeline.Title>Centre Point College</Timeline.Title>
                <Timeline.Title>
                  Bachelors in Business Administration (BBA)
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>

      {/* Right Side */}
      <div data-aos="fade-down">
        <h2 className="text-2xl text-center text-rose-500 mb-8 font-extrabold">
          SKILLS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 text-center">
          {techs.map(({ id, src, title }) => (
            <div className="p-4 hover:scale-105 duration-200" key={id}>
              <img src={src} alt="title" width={75} height={75} />
              <p className="pt-4 text-gray-900 dark:text-white font-bold">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
