/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { FcPhone } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <div
      name="contact"
      id="contact"
      className="max-w-screen px-12 bg-white dark:bg-gray-900 font-contact pt-4 md:pt-20 pb-20 md:pb-24 xl:px-64 px-6"
    >
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-2xl font-extrabold text-rose-500">CONTACT</h2>
      </div>

      {/* Resume */}
      <div
        className="w-5/12 md:w-3/12 flex flex-col items-center gap-3 p-6 rounded-xl mx-auto shadow-rose-500 shadow-md mb-12 bg-gray-900 text-white dark:bg-white dark:text-gray-900"
        data-aos="fade-down"
      >
        <div>
          <FaDownload
            className="hover:animate-bounce text-yellow-400"
            size="32px"
          />
        </div>
        <div>
          <a
            href="https://drive.google.com/u/0/uc?id=1We9ytnoF1n0U6Is59-933y8CUCnQTWCE&export=download"
            smooth
            className="text-white py-2 px-4 bg-gray-900 text-xl font-bold hover:underline dark:text-gray-900 dark:bg-white"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-rose-500 shadow-md mb-6 bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          data-aos="fade-down"
        >
          <div>
            <FcPhone className="hover:animate-bounce" size="32px" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Phone :</h1>
            <h1 className="xxs:text-[14px] md:text-xl">+91-7020644638</h1>
          </div>
        </div>

        <div
          className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-md shadow-rose-500 mb-6 bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          data-aos="fade-down"
        >
          <div>
            <SiGmail className="hover:animate-bounce" size="32px" color="red" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Email :</h1>
            <h1 className="text-[11px] md:text-xl">
              <a
                href="mailto:salmanajani0426@gmail.com"
                className="hover:underline"
                target="_blank"
              >
                salmanajani0426@gmail.com
              </a>
            </h1>
          </div>
        </div>

        <div
          className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-md shadow-rose-500 bg-gray-900 text-white dark:bg-white dark:text-gray-900 mb-6"
          data-aos="fade-down"
        >
          <div>
            <FaGithub
              className="hover:animate-bounce"
              size="32px"
              color="gray"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">GitHub :</h1>
            <h1 className="xxs:text-[14px] md:text-xl">
              <a
                href="https://github.com/SalmanAjani"
                className="hover:underline"
                target="_blank"
              >
                SalmanAjani
              </a>
            </h1>
          </div>
        </div>

        <div
          className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-md shadow-rose-500 bg-gray-900 text-white dark:bg-white dark:text-gray-900 mb-6"
          data-aos="fade-down"
        >
          <div>
            <FaLinkedin
              className="hover:animate-bounce"
              size="32px"
              color="#0077b5"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">LinkedIn :</h1>
            <h1 className="xxs:text-[14px] md:text-xl">
              <a
                href="https://www.linkedin.com/in/salmanajani26/"
                className="hover:underline"
                target="_blank"
              >
                salmanajani26
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
