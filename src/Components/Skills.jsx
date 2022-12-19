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
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper";

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
      className="bg-gradient-to-b to-emerald-400 from-emerald-300 w-full py-40 pt-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-emerald-900">
        <div className="mx-auto">
          <p
            className="text-5xl font-bold border-b-4 border-emerald-900 inline font-contact"
            data-aos="fade-right"
          >
            Skills
          </p>
        </div>

        <div className="mx-auto pt-20 mb-10" data-aos="fade-up">
          <h3 className="font-contact text-4xl text-black border-b-2 border-black inline">
            FrontEnd
          </h3>
        </div>
        <div className="text-white">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {techs.map(({ id, src, title }) => (
              <SwiperSlide>
                <div key={id}>
                  <img src={src} alt={title} />
                  <p className="mt-4">{title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mx-auto pt-20 mb-10" data-aos="fade-up">
          <h3 className="font-contact text-4xl text-black border-b-2 border-black inline">
            BackEnd
          </h3>
        </div>
        <div className="text-white">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {back.map(({ id, src, title }) => (
              <SwiperSlide>
                <div key={id}>
                  <img src={src} alt={title} />
                  <p className="mt-4">{title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mx-auto pt-20 mb-10" data-aos="fade-up">
          <h3 className="font-contact text-4xl text-black border-b-2 border-black inline">
            Tools I Use
          </h3>
        </div>
        <div className="text-white">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {extra.map(({ id, src, title }) => (
              <SwiperSlide>
                <div key={id}>
                  <img src={src} alt={title} />
                  <p className="mt-4">{title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;
