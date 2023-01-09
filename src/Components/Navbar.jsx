/* eslint-disable react/jsx-no-target-blank */
//https://drive.google.com/u/0/uc?id=1We9ytnoF1n0U6Is59-933y8CUCnQTWCE&export=download

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Toggle from "./toggle";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center bg-white h-20 fixed z-20 font-contact text-[18px] w-screen px-12 dark:bg-gray-900 dark:text-white">
      <div>
        <Toggle />
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize text-gray-900 hover:scale-105 duration-200 p-4 dark:text-white"
          >
            <Link
              to={link}
              smooth
              duration={500}
              className="hover:underline underline-offset-8"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-900 md:hidden dark:text-white"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Hamburger Section */}
      {nav && (
        <ul className="flex flex-col items-center absolute top-0 left-0 w-screen h-screen justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize py-6 text-4xl hover:text-white hover:bg-gray-900 hover:rounded-xl px-6 dark:hover:bg-white dark:hover:text-gray-900"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <p
            className="text-4xl py-6 cursor-pointer hover:text-white hover:bg-gray-900 hover:rounded-xl px-6 dark:hover:bg-white dark:hover:text-gray-900"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1We9ytnoF1n0U6Is59-933y8CUCnQTWCE/view?usp=sharing",
                "_blank"
              )
            }
          >
            Resume
          </p>
        </ul>
      )}

      <a
        href="https://drive.google.com/file/d/1We9ytnoF1n0U6Is59-933y8CUCnQTWCE/view?usp=sharing"
        target="_blank"
        smooth
        className="text-white py-2 px-4 hover:scale-105 duration-200 bg-gray-900 border rounded-xl hidden md:flex dark:text-gray-900 dark:bg-white"
      >
        Resume
      </a>
    </div>
  );
};

export default NavBar;
