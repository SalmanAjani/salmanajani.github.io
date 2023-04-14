/* eslint-disable react/jsx-no-target-blank */
import { BiMailSend } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import Resume from "../assets/Salman-Ajani-Resume.pdf";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full font-contact py-36 text-center"
    >
      <h2 className="font-bold text-xl mb-4 text-blue-500 text-center">
        Contact
      </h2>

      {/* Resume */}
      <div className="px-6">
        <div className="bg-gray-100 p-12 rounded-md mb-6 sm:w-6/12 md:w-2/5 lg:w-3/12 mx-auto leading-10">
          <FiDownload className="mx-auto text-3xl text-neutral-800" />
          <h3>Resume</h3>
          <a
            download=""
            href={Resume}
            target="_blank"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1r0OWQ7kwW7jQsQZ6a9TYiQ328Yhua4FD/view?usp=sharing",
                "_blank"
              )
            }
            smooth
            className="py-2 px-4 bg-neutral-800 text-white rounded-md hover:bg-blue-500"
          >
            Download
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 sm:grid sm:grid-cols-2 sm:gap-x-4 leading-10 text-neutral-600 md:w-9/12 md:mx-auto lg:w-6/12">
        <div className="bg-gray-100 p-12 rounded-md mb-6">
          <BiMailSend className="mx-auto text-3xl text-neutral-800" />
          <h3>salmanajani0426@gmail.com</h3>
          <button
            className="px-4 text-[15px] bg-neutral-800 text-white rounded-md hover:bg-blue-500"
            onClick={() => window.open("mailto:salmanajani0426@gmail.com")}
          >
            Write me
          </button>
        </div>
        <div className="bg-gray-100 p-12 rounded-md mb-6">
          <BiMobile className="mx-auto text-3xl text-neutral-800" />
          <h3>+91-7020644638</h3>
          <button
            className="px-4 text-[15px] bg-neutral-800 text-white rounded-md hover:bg-blue-500"
            onClick={() => window.open("tel:7020644638")}
          >
            Call me
          </button>
        </div>

        <div className="bg-gray-100 p-12 rounded-md mb-6">
          <FaGithub className="mx-auto text-3xl text-neutral-800" />
          <h3>SalmanAjani</h3>
          <button
            className="px-4 text-[15px] bg-neutral-800 text-white rounded-md hover:bg-blue-500"
            onClick={() => window.open("https://github.com/SalmanAjani")}
          >
            Checkout
          </button>
        </div>
        <div className="bg-gray-100 p-12 rounded-md mb-6">
          <FaLinkedin className="mx-auto text-3xl text-neutral-800" />
          <h3>salmanajani26</h3>
          <button
            className="px-4 text-[15px] bg-neutral-800 text-white rounded-md hover:bg-blue-500"
            onClick={() =>
              window.open("https://www.linkedin.com/in/salmanajani26/")
            }
          >
            Message me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
