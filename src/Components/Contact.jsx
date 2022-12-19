/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { FcPhone } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ delay: 200 });
  }, []);

  return (
    <>
      <div
        name="contact"
        className="w-full  bg-gradient-to-b from-emerald-300 to-emerald-400 p-4 text-emerald-900 pt-28 pb-40"
      >
        <div
          className="max-w-screen-lg mx-auto mb-16 text-center"
          data-aos="fade-right"
        >
          <p className="text-4xl font-bold inline border-b-4 border-emerald-900 font-contact">
            Contact
          </p>
        </div>
        <div className="max-w-screen-lg  mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 xxs:grid-cols-1 xs:grid-cols-1">
            <div className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-emerald-600 shadow-lg mb-6 bg-black">
              <div>
                <FcPhone className="hover:animate-bounce" size="32px" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-contact">Phone :</h1>
                <h1 className="xxs:text-[14px] md:text-xl text-gray-500 font-contact">
                  +91-7020644638
                </h1>
              </div>
            </div>

            <div className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-lg shadow-red-400  mb-6 bg-black">
              <div>
                <SiGmail
                  className="hover:animate-bounce"
                  size="32px"
                  color="red"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold font-contact">Email :</h1>
                <h1 className="xxs:text-[11px] md:text-xl text-gray-500 font-contact">
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

            <div className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-lg shadow-gray-400 bg-black">
              <div>
                <FaGithub
                  className="hover:animate-bounce"
                  size="32px"
                  color="white"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold font-contact">GitHub :</h1>
                <h1 className="xxs:text-[14px] md:text-xl text-gray-500 font-contact">
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

            <div className="w-10/12 flex gap-3 p-6 rounded-xl mx-auto shadow-lg shadow-blue-400 bg-black">
              <div>
                <FaLinkedin
                  className="hover:animate-bounce"
                  size="32px"
                  color="cyan"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold font-contact">LinkedIn :</h1>
                <h1 className="xxs:text-[14px] md:text-xl text-gray-500 font-contact">
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
      </div>
    </>
  );
};

export default Contact;
