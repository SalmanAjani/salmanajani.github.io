/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import appleDark from "../assets/portfolio/appledark/appleDark.png";
import greenhouse from "../assets/portfolio/greenhouse/greenhouse.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import homePage from "../assets/portfolio/beanbuy/b1.png";
import singlepage from "../assets/portfolio/beanbuy/b2.png";
import cart from "../assets/portfolio/beanbuy/b3.png";
import login from "../assets/portfolio/beanbuy/b4.png";

import home from "../assets/portfolio/nyresa/n1.png";
import single from "../assets/portfolio/nyresa/n2.png";
import products from "../assets/portfolio/nyresa/n3.png";
import loginPage from "../assets/portfolio/nyresa/n4.png";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
} from "react-icons/si";
import ImageSlider from "./ImageSlider";
import Github from "./github";

const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  const beanbuy = [
    {
      id: 1,
      src: homePage,
    },
    {
      id: 2,
      src: singlepage,
    },
    {
      id: 3,
      src: cart,
    },
    {
      id: 4,
      src: login,
    },
  ];

  const nyresa = [
    {
      id: 1,
      src: home,
    },
    {
      id: 2,
      src: single,
    },
    {
      id: 3,
      src: products,
    },
    {
      id: 4,
      src: loginPage,
    },
  ];

  const noteworthy = [
    {
      id: 1,
      src: appleDark,
      deployed: "https://appledark-app.vercel.app/",
      github: "https://github.com/SalmanAjani/appledark-tailwind",
      title: "AppleDark",
      desc: "Basically my own version of apple website but in dark.",
    },
    {
      id: 2,
      src: greenhouse,
      deployed: "https://greenhouse-clone.netlify.app/",
      github: "https://github.com/SalmanAjani/hard-farm-9175",
      title: "GreenHouse",
      desc: "A simple single page clone of the greenhouse official website.",
    },
  ];

  let style_md =
    "mt-6 rounded-lg duration-200  h-52   md:h-60  sm:max-w-screen-lg sm:object-cover object-center lg:hidden ";

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-emerald-400 to-emerald-300 w-full text-emerald-900 h-full py-28 font-contact"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-900">
            Projects
          </p>
        </div>

        {/* Section 1 */}
        <div className="text-center py-20" data-aos="fade-up">
          <h3 className="font-contact text-4xl text-black border-b-2 border-black inline round leading-normal">
            FullStack Projects
          </h3>
          <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10 bg-black ">
            <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
              <div className="px-10 py-12 max-w-xl mx-auto lg:px-10 lg:py-6 lg:max-w-full">
                <div className="block lg:hidden xs:ml-4 sm:ml-10 ss:ml-10 md:ml-1">
                  <ImageSlider
                    data={beanbuy}
                    imgStyle={style_md}
                    data-aos="fade-up"
                  />
                </div>
                <h1
                  className="mt-6 text-xl text-orange-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
                  data-aos="fade-right"
                >
                  Beanbuy
                </h1>
                <p
                  className="w-full  mt-2 text-white sm:mt-2 sm:text-xl"
                  data-aos="fade-right"
                >
                  Beanbuy offers premium beauty products like lipstick,
                  Eyeliners, and many more products with the latest in
                  innovative clinical skincare and luxury spa products.
                </p>
                <div
                  className="flex justify-center items-center gap-x-2 mt-5"
                  data-aos="zoom-out"
                >
                  <div>
                    <SiJavascript
                      size="32px"
                      color="yellow"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>

                  <div>
                    <SiReact
                      size="32px"
                      color="#194D33"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>
                  <div>
                    <SiRedux
                      size="32px"
                      color="#764abc"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>
                </div>
                <div className="max-w-screen-md flex justify-center space-x-6">
                  <div className="mt-4 sm:mt-6">
                    <a
                      href="https://github.com/SalmanAjani/cowardly-wine-9340"
                      target={"_blank"}
                    >
                      <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-emerald-200 cursor-pointershadow-lg uppercase tracking-wide text-sm text-black sm:text-base">
                        GitHub
                      </button>
                    </a>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <a href="https://beanbuy.netlify.app/" target={"_blank"}>
                      <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-emerald-200 cursor-pointer shadow-lg uppercase tracking-wide text-sm text-black sm:text-base">
                        Deployed
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden relative lg:block " data-aos="fade-left">
                <a href="https://beanbuy.netlify.app/" target={"_blank"}>
                  <img
                    className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                    src={homePage}
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-screen-lg  mx-auto px-2 shadow-xl shadow-gray-600 mt-10 bg-black ">
            <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2  ">
              <div className="px-10 py-12 max-w-xl mx-auto lg:px-10 lg:py-6 lg:max-w-full">
                <div className="block lg:hidden xs:ml-4 sm:ml-10 ss:ml-10 md:ml-1">
                  <ImageSlider
                    data={nyresa}
                    imgStyle={style_md}
                    data-aos="fade-up"
                  />
                </div>
                <h1
                  className="mt-6 text-xl text-orange-500 font-bold sm:mt-8  sm:text-3xl lg:text-2xl"
                  data-aos="fade-right"
                >
                  Nyresa
                </h1>
                <p
                  className="w-full  mt-2 text-white sm:mt-2 sm:text-xl"
                  data-aos="fade-right"
                >
                  Nyresa is a full fledged e-commerce website that sells mens,
                  womens and kids clothes and accessories. You can easily place
                  your orders and we promise to have it delivered as soon as
                  possible.
                </p>
                <div
                  className="flex justify-center items-center gap-x-2 mt-5"
                  data-aos="zoom-out"
                >
                  <div>
                    <SiHtml5
                      size="32px"
                      color="orange"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>
                  <div>
                    <SiCss3
                      size="32px"
                      color="cyan"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>

                  <div>
                    <SiJavascript
                      size="32px"
                      color="yellow"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>

                  <div>
                    <SiReact
                      size="32px"
                      color="#194D33"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>
                  <div>
                    <SiRedux
                      size="32px"
                      color="#764abc"
                      className="hover:animate-bounce hover:cursor-pointer"
                    />
                  </div>
                </div>
                <div className="max-w-screen-md flex justify-center space-x-6">
                  <div className="mt-4 sm:mt-6">
                    <a
                      href="https://github.com/himanshudestiny/numerous-governor-3295"
                      target={"_blank"}
                    >
                      <button className="inline-block px-4 py-2 rounded-lg  hover:opacity-70 bg-emerald-200 cursor-pointershadow-lg uppercase tracking-wide text-sm text-black sm:text-base">
                        GitHub
                      </button>
                    </a>
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <a
                      href="https://numerous-governor-3295.netlify.app/"
                      target={"_blank"}
                    >
                      <button className="inline-block px-4 py-2 rounded-lg hover:opacity-70 bg-emerald-200 cursor-pointer shadow-lg uppercase tracking-wide text-sm text-black sm:text-base">
                        Deployed
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden relative lg:block " data-aos="fade-left">
                <a
                  href="https://numerous-governor-3295.netlify.app/"
                  target={"_blank"}
                >
                  <img
                    className="absolute inset-0 w-full   hover:scale-110  -mx-3 h-full object-contain  duration-700 hover:cursor-pointer "
                    src={home}
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-full text-center">
          <div className="pt-20 pb-8" data-aos="fade-up">
            <h3 className="font-contact sm:text-4xl text-black border-b-2 border-black inline xxs:text-2xl xs:text-2xl">
              Other Noteworthy Projects
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pt-6 xs:grid-cols-1 xxs:grid-cols-1 xs:mx-6">
            {noteworthy.map(({ id, src, deployed, github, title, desc }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg  text-white bg-black"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="text-center pt-4">
                  <h3 className="text-white text-[20px] pb-2">{title}</h3>
                  <p className="w-8/12 mx-auto text-gray-600">{desc}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-emerald-600 hover:bg-orange-500 hover:text-black hover:rounded-2xl"
                    onClick={() => window.open(deployed)}
                  >
                    Deployed
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-emerald-600 hover:bg-orange-500 hover:text-black hover:rounded-2xl"
                    onClick={() => window.open(github)}
                  >
                    Github
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-screen-md mx-auto p-2 text-center mt-32 text-4xl text-white border-b-4 border-emerald-900">
          <Github />
        </div>
        <div className="mx-auto">
          <h3 className="text-center text-4xl pt-12 pb-4 text-emerald-900 border-b-4 border-emerald-900">
            Github Stats
          </h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=SalmanAjani&show_icons=true"
            alt="github"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
