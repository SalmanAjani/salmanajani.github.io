import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

import printshop from "../assets/portfolio/printshop/p1.png";
import hms from "../assets/portfolio/hms/hms1.png";
import social from "../assets/portfolio/social/s1.png";
import blogger from "../assets/portfolio/blogger/b1.png";
import gymist from "../assets/portfolio/gymist/g1.png";

import Waves from "../assets/AbstractWaves.png";

function Projects() {
  const fullstack = [
    {
      id: 1,
      src: printshop,
      deployed: "https://justprintkaro.com/",
      github: "https://github.com/piyush-agrawal6/PrintShop",
      title: "JustPrintkaro",
      desc: "JustPrintkaro is a printing based website where users can request their own designs.",
      techstack: "React, Redux, Nodejs, MongoDB",
    },
    {
      id: 2,
      src: hms,
      deployed: "https://hms-user-side.netlify.app/",
      github:
        "https://github.com/piyush-agrawal6/Hospital-Management-System-User-Side",
      title: "Hospital management app",
      desc: "HMS is a web application that can be used for the complete management of a hospital.",
      techstack: "React, Redux, Nodejs, MongoDB",
    },
    {
      id: 3,
      src: blogger,
      deployed: "https://blogger-sql.netlify.app/",
      github: "https://github.com/SalmanAjani/Blogger",
      title: "Blogger",
      desc: "Blogger is a blogging app where users can read blogs and also create their own blogs.",
      techstack: "React, Context API, SCSS, Nodejs, MySQL",
    },
    {
      id: 4,
      src: social,
      deployed: "https://social-100-mern.netlify.app/",
      github: "https://github.com/SalmanAjani/Social",
      title: "Social",
      desc: "Social is a social media app for users to interact and create posts.",
      techstack:
        "React, Redux Toolkit, Material UI, Nodejs, Expressjs, MongoDB",
    },
    {
      id: 5,
      src: gymist,
      deployed: "https://gymist.vercel.app/",
      github: "https://github.com/SalmanAjani/Gymist",
      title: "Gymist",
      desc: "Transform yourself today with Gymist - where fitness meets inspiration.",
      techstack: "React, TypeScript, TailwindCSS",
    },
  ];

  return (
    <div
      name="projects"
      id="projects"
      className="w-full flex flex-col items-center font-contact px-6 pt-36 pb-32 sm:px-10 lg:w-10/12 lg:mx-auto xl:w-8/12 xl:mx-auto relative"
    >
      <div className="absolute top-5 left-12">
        <img src={Waves} alt="waves" className="w-7/12 sm:w-4/5 xl:9/12" />
      </div>
      <div className="absolute bottom-5 left-12">
        <img src={Waves} alt="waves" className="w-7/12 sm:w-4/5 xl:w-9/12" />
      </div>

      <div className="absolute top-5 right-0 sm:right-3 xl:right-10">
        <img src={Waves} alt="waves" className="w-7/12 sm:w-4/5 xl:9/12" />
      </div>
      <div className="absolute bottom-5 right-0 sm:right-3 xl:right-10">
        <img src={Waves} alt="waves" className="w-7/12 sm:w-4/5 xl:9/12" />
      </div>

      <h2 className="font-bold text-xl mb-10 text-blue-500">PROJECTS</h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3">
        {fullstack.map(
          ({ id, src, deployed, github, title, desc, techstack }) => (
            <div
              className="shadow-md p-8 pb-6 bg-gray-100 mb-10 rounded-md h-auto hover:shadow-2xl"
              key={id}
            >
              <img
                src={src}
                alt={title}
                className="pb-4 sm:h-5/12 md:h-36 lg:h-40 xl:h-44 mx-auto w-full"
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
                  className="text-3xl mr-4 p-1 bg-white rounded-md hover:text-blue-500 duration-300"
                  onClick={() => window.open(deployed)}
                >
                  <BiLink />
                </button>
                <button
                  className="text-3xl p-1 bg-white rounded-md hover:text-blue-500 duration-300"
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
