import React, { useState, useEffect } from "react";

// Noteworthy projects
import appleDark from "../assets/portfolio/appledark/appleDark.png";
import greenhouse from "../assets/portfolio/greenhouse/greenhouse.png";
import beanbuy from "../assets/portfolio/beanbuy/b1.png";

// Fullstack projects
import nyresa from "../assets/portfolio/nyresa/n1.png";

// React Icons
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const fullstack = [
    {
      id: 1,
      src: nyresa,
      deployed: "https://numerous-governor-3295.netlify.app/",
      github: "https://github.com/himanshudestiny/numerous-governor-3295",
      title: "Nyresa",
      desc: "Nyresa is an e-commerce website where users can buy products such as clothings, apparels etc.",
    },
  ];

  const noteworthy = [
    {
      id: 1,
      src: appleDark,
      deployed: "https://appledark-app.vercel.app/",
      github: "https://github.com/SalmanAjani/appledark-tailwind",
      title: "AppleDark",
      desc: "A simple single page website made using Tailwind CSS.",
    },
    {
      id: 2,
      src: greenhouse,
      deployed: "https://greenhouse-clone.netlify.app/",
      github: "https://github.com/SalmanAjani/hard-farm-9175",
      title: "GreenHouse",
      desc: "A simple single page clone of the greenhouse official website.",
    },
    {
      id: 3,
      src: beanbuy,
      deployed: "https://beanbuy.netlify.app/",
      github: "https://github.com/SalmanAjani/cowardly-wine-9340",
      title: "Beanbuy",
      desc: "A small ecommerce app used for selling all kinds of things.",
    },
  ];

  return (
    <div
      name="projects"
      id="projects"
      className="max-w-screen flex flex-col items-center font-contact px-6 pt-4 md:pt-20 pb-20 md:pb-24 bg-white dark:bg-gray-900 text-center"
    >
      <h2
        className="font-extrabold text-2xl mb-12 text-rose-500"
        data-aos="fade-down"
      >
        PROJECTS
      </h2>

      {/* Headings */}
      <ul
        className="tab-list flex gap-6 cursor-pointer mb-6"
        data-aos="fade-down"
      >
        <li
          className={`tab py-2 px-4 border-2 border-black ${
            selectedTab === 0
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              : "dark:border-white dark:text-white"
          } font-medium text-md leading-5 rounded-xl transition ease-in-out hover:scale-105 duration-200`}
          onClick={() => handleTabClick(0)}
        >
          FullStack Projects
        </li>
        <li
          className={`tab py-2 px-4 border-2 border-black ${
            selectedTab === 1
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              : "dark:border-white dark:text-white"
          } font-medium text-md leading-5 rounded-xl transition ease-in-out hover:scale-105 duration-200`}
          onClick={() => handleTabClick(1)}
        >
          Other Noteworthy Projects
        </li>
      </ul>

      {/* Project Section */}
      <div className="tab-content py-6 px-4" data-aos="fade-down">
        {/* Fullstack */}
        {selectedTab === 0 && (
          <div className="max-w-screen text-center w-3/3 sm:w-2/3 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6">
            {fullstack.map(({ id, src, deployed, github, title, desc }) => (
              <div
                key={id}
                className="mb-12 p-6 text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl shadow-md shadow-rose-500"
              >
                {/* Image */}
                <img
                  src={src}
                  alt="title"
                  className="mb-4 border-2 border-white dark:border-2 dark:border-gray-900"
                />

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl text-rose-500 font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-md">{desc}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex justify-center gap-x-2 mb-4">
                  <div>
                    <SiHtml5 size="32px" color="#e34c26" className="" />
                  </div>
                  <div>
                    <SiJavascript size="32px" color="yellow" className="" />
                  </div>
                  <div>
                    <SiReact size="32px" color="#61DBFB" className="" />
                  </div>
                  <div>
                    <SiCss3 size="32px" color="#264de4" className="" />
                  </div>
                  <div>
                    <SiRedux size="32px" color="#764abc" className="" />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-evenly">
                  <button
                    className="border-2 border-white rounded-md bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-2 hover:scale-105 duration-200"
                    onClick={() => window.open(deployed)}
                  >
                    Deployed
                  </button>
                  <button
                    className="border-2 border-white rounded-md bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-2 hover:scale-105 duration-200"
                    onClick={() => window.open(github)}
                  >
                    Github
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Noteworthy */}
        {selectedTab === 1 && (
          <div className="max-w-screen text-center w-3/3 sm:w-2/3 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6">
            {noteworthy.map(({ id, src, deployed, github, title, desc }) => (
              <div
                key={id}
                className="mb-12 p-6 text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl shadow-md shadow-rose-500"
              >
                {/* Image */}
                <img
                  src={src}
                  alt="title"
                  className="mb-4 border-2 border-white dark:border-2 dark:border-gray-900"
                />

                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-xl text-rose-500 font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-md">{desc}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex justify-center gap-x-2 mb-4">
                  <div>
                    <SiHtml5 size="32px" color="#e34c26" className="" />
                  </div>
                  <div>
                    <SiJavascript size="32px" color="yellow" className="" />
                  </div>
                  <div>
                    <SiReact size="32px" color="#61DBFB" className="" />
                  </div>
                  <div>
                    <SiCss3 size="32px" color="#264de4" className="" />
                  </div>
                  <div>
                    <SiRedux size="32px" color="#764abc" className="" />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-evenly">
                  <button
                    className="border-2 border-white rounded-md bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-2 hover:scale-105 duration-200"
                    onClick={() => window.open(deployed)}
                  >
                    Deployed
                  </button>
                  <button
                    className="border-2 border-white rounded-md bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-2 hover:scale-105 duration-200"
                    onClick={() => window.open(github)}
                  >
                    Github
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
