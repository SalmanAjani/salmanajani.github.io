/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import heroImg2 from "../assets/heroImg2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className="bg-gray-100 w-full pt-48 pb-24 font-contact flex flex-col-reverse items-center md:flex md:flex-row md:justify-center md:py-56 md:gap-6 xl:gap-0 px-12 lg:px-16"
    >
      {/* Intro */}
      <div className="text-4xl mt-10 md:mt-0 md:text-7xl text-center md:text-left md:w-6/12 lg:w-5/12 text-neutral-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-bold">
            Full Stack Developer{" "}
            <p className="inline-block animate-wavinghand">👋🏻</p>
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="text-xl mt-8 font-normal sm:w-8/12 sm:m-auto sm:mt-4 md:m-0 md:mt-6 md:w-10/12 text-neutral-600">
            Hi, I'm Salman Ajani. A passionate Full Stack Developer based in
            Bangalore, India. 📍
          </h3>
        </motion.div>
        <motion.div
          className="flex justify-center mt-8 gap-4 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            href="https://www.linkedin.com/in/salmanajani26/"
            target="_blank"
            className="hover:text-blue-600 duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/SalmanAjani"
            target="_blank"
            className="hover:text-blue-600 duration-300"
          >
            <FaGithub size={30} />
          </a>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        className="shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="bg-neutral-800 rounded-md shadow-2xl hover:shadow-black duration-300">
          <img src={heroImg2} alt="hero" width={400} />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
