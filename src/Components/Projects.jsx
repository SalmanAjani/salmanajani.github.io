import React, { useState, useEffect } from "react";

// Noteworthy projects
import appleDark from "../assets/portfolio/appledark/appleDark.png";
import textanimation from "../assets/portfolio/csstext/t1.png";
import weather from "../assets/portfolio/weatherapp/w1.png";

// Fullstack projects
import nyresa from "../assets/portfolio/nyresa/n1.png";

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
      techstack: "ChakraUI, JavaScript, React, Redux",
    },
  ];

  const noteworthy = [
    {
      id: 1,
      src: appleDark,
      deployed: "https://appledark-app.vercel.app/",
      github: "https://github.com/SalmanAjani/appledark-tailwind",
      title: "AppleDark",
      desc: "A single page website made using Tailwind CSS.",
      techstack: "React, TailwindCSS",
    },
    {
      id: 2,
      src: textanimation,
      deployed: "https://gilded-dolphin-9a7020.netlify.app/",
      github: "https://github.com/SalmanAjani/css-text-animation",
      title: "CSS Text Animation",
      desc: "A text-animation that is built with pure CSS.",
      techstack: "HTML, CSS",
    },
    {
      id: 3,
      src: weather,
      deployed: "https://iridescent-syrniki-50a879.netlify.app/",
      github: "https://github.com/SalmanAjani/js-weather-app",
      title: "Weather App",
      desc: "A weather app built with vanilla Javascript.",
      techstack: "HTML, CSS, Javascript",
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
          Major Projects
        </li>
        <li
          className={`tab py-2 px-4 border-2 border-black ${
            selectedTab === 1
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
              : "dark:border-white dark:text-white"
          } font-medium text-md leading-5 rounded-xl transition ease-in-out hover:scale-105 duration-200`}
          onClick={() => handleTabClick(1)}
        >
          Mini Projects
        </li>
      </ul>

      {/* Project Section */}
      <div className="tab-content py-6 px-4" data-aos="fade-down">
        {/* Fullstack */}
        {selectedTab === 0 && (
          <div className="max-w-screen text-center w-3/3 sm:w-2/3 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6">
            {fullstack.map(
              ({ id, src, deployed, github, title, desc, techstack }) => (
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
                  <div className="mb-4">
                    <p>
                      <span className="text-rose-500 font-bold">
                        Techstack:
                      </span>{" "}
                      {techstack}
                    </p>
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
              )
            )}
          </div>
        )}

        {/* Noteworthy */}
        {selectedTab === 1 && (
          <div className="max-w-screen text-center w-3/3 sm:w-2/3 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-6">
            {noteworthy.map(
              ({ id, src, deployed, github, title, desc, techstack }) => (
                <div
                  key={id}
                  className="mb-12 p-6 text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl shadow-md shadow-rose-500"
                >
                  {/* Image */}
                  <img
                    src={src}
                    alt="title"
                    className="mb-4 border-2 border-white dark:border-2 dark:border-gray-900 h-1/3 mx-auto"
                  />

                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-xl text-rose-500 font-bold mb-2">
                      {title}
                    </h3>
                    <p className="text-md">{desc}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p>
                      <span className="text-rose-500 font-bold">
                        Techstack:
                      </span>{" "}
                      {techstack}
                    </p>
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
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
