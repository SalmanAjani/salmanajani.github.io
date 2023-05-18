/* eslint-disable react/jsx-no-target-blank */
import { BiMailSend } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Sparkles from "../assets/Sparkles.png";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full font-contact py-36 text-center relative"
    >
      <h2 className="font-bold text-xl mb-4 text-blue-500 text-center">
        Contact
      </h2>

      <div className="absolute bottom-5 left-12">
        <img
          src={Sparkles}
          alt="sparkles"
          className="w-7/12 sm:w-4/5 xl:w-full"
        />
      </div>
      <div className="absolute top-5 right-0 sm:right-3 xl:right-10">
        <img
          src={Sparkles}
          alt="sparkles"
          className="w-7/12 sm:w-4/5 xl:w-full"
        />
      </div>

      {/* Grid */}
      <div className="px-6 sm:grid sm:grid-cols-2 sm:gap-x-12 leading-10 text-neutral-600 md:w-9/12 md:mx-auto lg:w-7/12">
        <div className="bg-gray-100 p-12 rounded-md mb-8 shadow-md hover:bg-red-100 duration-300">
          <BiMailSend className="mx-auto text-3xl text-red-500 hover:animate-wavinghand" />
          <h3>salmanajani0426@gmail.com</h3>
          <button
            className="px-4 text-[15px] bg-red-500 text-white rounded-md hover:bg-red-600 duration-300"
            onClick={() => window.open("mailto:salmanajani0426@gmail.com")}
          >
            Write me
          </button>
        </div>
        <div className="bg-gray-100 p-12 rounded-md mb-8 shadow-md hover:bg-emerald-100 duration-300">
          <BiMobile className="mx-auto text-3xl text-emerald-700 hover:animate-wavinghand" />
          <h3>+91-7020644638</h3>
          <button
            className="px-4 text-[15px] bg-emerald-700 text-white rounded-md hover:bg-emerald-800 duration-300"
            onClick={() => window.open("tel:7020644638")}
          >
            Call me
          </button>
        </div>

        <div className="bg-gray-100 p-12 rounded-md mb-8 shadow-md hover:bg-gray-200 duration-300">
          <FaGithub className="mx-auto text-3xl text-gray-800 hover:animate-wavinghand" />
          <h3>SalmanAjani</h3>
          <button
            className="px-4 text-[15px] bg-gray-800 text-white rounded-md hover:bg-gray-900 duration-300"
            onClick={() => window.open("https://github.com/SalmanAjani")}
          >
            Checkout
          </button>
        </div>
        <div className="bg-gray-100 p-12 rounded-md mb-8 shadow-md hover:bg-sky-100 duration-300">
          <FaLinkedin className="mx-auto text-3xl text-sky-700 hover:animate-wavinghand" />
          <h3>salmanajani26</h3>
          <button
            className="px-4 text-[15px] bg-sky-700 text-white rounded-md hover:bg-sky-800 duration-300"
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
