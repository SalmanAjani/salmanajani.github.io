/* eslint-disable react/jsx-no-target-blank */
//https://drive.google.com/u/0/uc?id=1We9ytnoF1n0U6Is59-933y8CUCnQTWCE&export=download

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
    <div className="max-w-screen mx-auto flex justify-between items-center w-full h-20 px-20 py-1 text-white bg-emerald-900 fixed z-20 font-contact">
      <ul className="hidden sm:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="cursor-pointer capitalize text-[18px] text-emerald-200 hover:scale-105 duration-200 hover:text-emerald-500 border-2 border-emerald-200 p-4"
          >
            <Link
              to={link}
              href={href}
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
        className="cursor-pointer z-10 text-white sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 text-emerald-200">
          {links.map(({ id, link }) => (
            <li key={id} className="cursor-pointer capitalize py-6 text-4xl">
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
        </ul>
      )}

      <a
        href="https://drive.google.com/file/d/1We9ytnoF1n0U6Is59-933y8CUCnQTWCE/view?usp=sharing"
        target="_blank"
        smooth
        className="text-[18px] border-2 text-emerald-200 border-emerald-200 p-4 hover:scale-105 duration-200 hover:text-emerald-500"
      >
        Resume
      </a>
    </div>
  );
};

export default NavBar;
