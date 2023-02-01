import React, { useState, useEffect } from "react";

// Noteworthy projects
import eclipse from "../assets/portfolio/csseclipse/img2.png";
import weather from "../assets/portfolio/weatherapp/w1.png";
import cart from "../assets/portfolio/reactcart/img1.png";
import blog from "../assets/portfolio/blog/img2.png";

// Fullstack projects
import nyresa from "../assets/portfolio/nyresa/n1.png";
import hms from "../assets/portfolio/hms/hms1.png";

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
    {
      id: 2,
      src: hms,
      deployed: "https://hms-user-side.netlify.app/",
      github:
        "https://github.com/piyush-agrawal6/Hospital-Management-System-User-Side",
      title: "Hospital Management System",
      desc: "This is an app that can be used for the management of a hospital.",
      techstack: "Ant Design, React, Redux, MongoDB, Express, NodeJs",
    },
  ];

  const noteworthy = [
    {
      id: 1,
      src: eclipse,
      deployed: "https://solar-eclipse-0426.netlify.app/",
      github: "https://github.com/SalmanAjani/css-solar-eclipse",
      title: "Solar Eclipse",
      desc: "This is an animation that showcases how a solar eclipse works. The code for this has been written mainly with css.",
      techstack: "HTML, CSS",
    },
    {
      id: 2,
      src: weather,
      deployed: "https://js-weather-app-0426.netlify.app/",
      github: "https://github.com/SalmanAjani/js-weather-app",
      title: "Weather App",
      desc: "A weather app built with Javascript. It shows weather conditions of a particular city or according to user's current location.",
      techstack: "HTML, CSS, JavaScript",
    },
    {
      id: 3,
      src: cart,
      deployed: "https://react-contextapi-cart.netlify.app/",
      github: "https://github.com/SalmanAjani/react-contextapi-cart",
      title: "Ecommerce Cart",
      desc: "This is an e-commerce cart application built with React. There are multiple filtering and sorting options.",
      techstack: "CSS, React, ContextAPI",
    },
    {
      id: 4,
      src: blog,
      deployed: "https://good-teal-butterfly-kilt.cyclic.app/",
      github: "https://github.com/SalmanAjani/nem-blogapp-backend",
      title: "Blog App Backend",
      desc: "This is a backend server that is ready to use for a simple blog app. There is a direct link that can be used as well.",
      techstack: "JavaScript, MongoDB, Express.js, Node.js",
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
          <div className="max-w-screen text-center w-3/3 sm:w-2/3 mx-auto md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-6">
            {fullstack.map(
              ({ id, src, deployed, github, title, desc, techstack }) => (
                <div
                  key={id}
                  className="mb-12 flex flex-col py-6 justify-center px-6 text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl shadow-md shadow-rose-500 xl:pb-0"
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
                  <div className="flex justify-evenly lg:gap-x-2">
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
                  className="mb-12 flex flex-col py-6 justify-center px-6 text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-xl shadow-md shadow-rose-500 xl:pb-0"
                >
                  {/* Image */}
                  <img
                    src={src}
                    alt="title"
                    className="mb-4 border-2 border-white dark:border-2 dark:border-gray-900 h-1/3 mx-auto"
                  />

                  {/* Title and Description */}
                  <div className="mb-4">
                    <h3 className="text-md text-rose-500 font-bold mb-2">
                      {title}
                    </h3>
                    <p className="text-sm">{desc}</p>
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
                  <div className="flex justify-evenly lg:gap-x-2">
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
