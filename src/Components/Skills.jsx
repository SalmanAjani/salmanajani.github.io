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
import sass from "../assets/sass.png";
import mui from "../assets/mui.png";
import figma from "../assets/figma.png";
import npm from "../assets/npm.png";
import mysql from "../assets/mysql.png";
import postgres from "../assets/postgres.png";
import postman from "../assets/postman.png";

const Skills = () => {
  const fronttech = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 9,
      src: sass,
      title: "Sass",
    },
    {
      id: 7,
      src: nextjs,
      title: "Nextjs",
    },
    {
      id: 8,
      src: typescript,
      title: "Typescript",
    },

    {
      id: 10,
      src: mui,
      title: "MaterialUI",
    },
    {
      id: 11,
      src: figma,
      title: "Figma",
    },
  ];

  const backtech = [
    {
      id: 1,
      src: node,
      title: "Node.js",
    },
    {
      id: 2,
      src: express,
      title: "Express.js",
    },
    {
      id: 3,
      src: mongodb,
      title: "MongoDB",
    },
    {
      id: 6,
      src: mysql,
      title: "MySQL",
    },
    {
      id: 7,
      src: postgres,
      title: "PostgreSQL",
    },
    {
      id: 4,
      src: github,
      title: "GitHub",
    },
    {
      id: 5,
      src: npm,
      title: "NPM",
    },

    {
      id: 8,
      src: postman,
      title: "Postman",
    },
  ];

  return (
    <div
      name="skills"
      id="skills"
      className="w-full bg-gray-200 py-36 text-center font-contact"
    >
      <h2 className="font-bold text-xl mb-10 text-blue-500">SKILLS</h2>
      {/* Flex */}
      <div className="px-8 sm:px-32 md:flex md:justify-center gap-16">
        {/* Left Side */}
        <div className="bg-white mb-12 rounded-md pb-4 md:p-12">
          <h3 className="text-2xl text-neutral-800 font-bold pt-4 mb-4 md:pt-0">
            Frontend
          </h3>
          <div className="grid grid-cols-3 gap-y-3 md:gap-x-6">
            {fronttech.map(({ id, src, title }) => (
              <div className="p-4" key={id}>
                <img
                  src={src}
                  alt="title"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <p className="pt-4 text-neutral-600 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white mb-12 rounded-md pb-4 md:p-12">
          <h3 className="text-2xl text-neutral-800 font-bold pt-4 mb-4 md:pt-0">
            Backend
          </h3>
          <div className="grid grid-cols-3 gap-y-3 md:gap-x-6">
            {backtech.map(({ id, src, title }) => (
              <div className="p-4" key={id}>
                <img
                  src={src}
                  alt="title"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <p className="pt-4 text-neutral-600 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
