import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-100vh py-28 bg-gradient-to-b from-black to-gray-900 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Contact Me
          </p>
          <div className="flex flex-row gap-5 pt-8 items-center">
            <p className="font-bold">You can contact me here :</p>
            <button
              className="bg-emerald-900 px-2 py-2 text-white rounded-2xl"
              onClick={() => window.open("https://github.com/SalmanAjani")}
            >
              <FaGithub size={30} />
            </button>

            <button
              className="bg-emerald-900 px-2 py-2 text-white rounded-2xl"
              onClick={() =>
                window.open("https://www.linkedin.com/in/salmanajani26/")
              }
            >
              <FaLinkedin size={30} />
            </button>

            <button
              className="bg-emerald-900 px-2 py-2 text-white rounded-2xl"
              onClick={() => window.open("mailto:salmanajani0426@gmail.com")}
            >
              <HiOutlineMail size={30} />
            </button>
          </div>

          <p className="pt-10 font-bold">
            Or you can directly get in touch :{" "}
            <span className="font-contact">+91-7020644638</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
