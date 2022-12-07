import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      deployed: "",
      github: "",
    },
    {
      id: 2,
      src: reactParallax,
      deployed: "",
      github: "",
    },
    {
      id: 3,
      src: navbar,
      deployed: "",
      github: "",
    },
    {
      id: 4,
      src: reactSmooth,
      deployed: "",
      github: "",
    },
    {
      id: 5,
      src: installNode,
      deployed: "",
      github: "",
    },
    {
      id: 6,
      src: reactWeather,
      deployed: "",
      github: "",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white h-full py-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Projects
          </p>
          <p className="py-6 font-bold">
            Check out some of the projects I've built
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, deployed, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-emerald-900 text-white"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(deployed)}
                >
                  Deployed
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(github)}
                >
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
