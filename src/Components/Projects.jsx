import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

import hms from "../assets/portfolio/hms/hms1.png";
import social from "../assets/portfolio/social/s1.png";

function Projects() {
  const fullstack = [
    {
      id: 1,
      src: hms,
      deployed: "https://hms-user-side.netlify.app/",
      github:
        "https://github.com/piyush-agrawal6/Hospital-Management-System-User-Side",
      title: "Hospital management app",
      desc: "An app that can be used for the complete management of a hospital.",
      techstack: "Ant Design, React, Redux, Node.js, Express.js, MongoDB",
    },
    {
      id: 2,
      src: social,
      deployed: "https://social-100-mern.netlify.app/",
      github: "https://github.com/SalmanAjani/Social",
      title: "Social",
      desc: "Social is a social media app for users to interact and create posts.",
      techstack:
        "Material UI, React, Redux Toolkit, Node.js, Express.js, MongoDB",
    },
    {
      id: 3,
      src: hms,
      deployed: "https://hms-user-side.netlify.app/",
      github:
        "https://github.com/piyush-agrawal6/Hospital-Management-System-User-Side",
      title: "Hospital management app",
      desc: "This is an app that can be used for the management of a hospital.",
      techstack: "Ant Design, React, Redux, MongoDB, Express, NodeJs",
    },
    {
      id: 4,
      src: hms,
      deployed: "https://hms-user-side.netlify.app/",
      github:
        "https://github.com/piyush-agrawal6/Hospital-Management-System-User-Side",
      title: "Hospital management app",
      desc: "This is an app that can be used for the management of a hospital.",
      techstack: "Ant Design, React, Redux, MongoDB, Express, NodeJs",
    },
  ];

  return (
    <div
      name="projects"
      id="projects"
      className="w-full flex flex-col items-center font-contact px-6 pt-36 pb-32 sm:px-16 lg:w-8/12 lg:mx-auto"
    >
      <h2 className="font-bold text-xl mb-10 text-blue-500">PROJECTS</h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
        {fullstack.map(
          ({ id, src, deployed, github, title, desc, techstack }) => (
            <div
              className="shadow-md p-8 pb-10 bg-gray-100 mb-10 rounded-md"
              key={id}
            >
              <img
                src={src}
                alt={title}
                className="pb-4 h-3/6 mx-auto w-full"
              />
              <p className="text-xl font-semibold text-neutral-800 pb-2 sm:text-[18px]">
                {title}
              </p>
              <p className="text-md text-neutral-600 pb-3 sm:text-[15px]">
                {desc}
              </p>
              <p className="text-md text-neutral-600 sm:text-[15px]">
                <span className="font-semibold text-neutral-800">
                  Tech Stack{" "}
                </span>
                - {techstack}
              </p>
              <div className="mt-4">
                <button
                  className="text-3xl mr-4 p-1 bg-white rounded-md hover:text-blue-500"
                  onClick={() => window.open(deployed)}
                >
                  <BiLink />
                </button>
                <button
                  className="text-3xl p-1 bg-white rounded-md hover:text-blue-500"
                  onClick={() => window.open(github)}
                >
                  <FaGithub />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
