import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-emerald-50 via-emerald-50 to-emerald-100 p-4 text-black"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
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
          </div>

          <p className="pt-10 font-bold">
            Or you can send me a mail directly :
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/d3d556fa-5d5d-4bd2-8053-19bce8a9ac44"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-emerald-900 border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-emerald-900 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-2 bg-emerald-900 border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-emerald-900 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
