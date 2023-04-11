/* eslint-disable react/jsx-no-target-blank */

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Res from "../assets/Salman-Ajani-Resume.pdf";

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
    <div className="flex justify-between items-center bg-white h-20 fixed z-20 font-contact text-[18px] w-screen px-12 shadow-md text-neutral-800 font-medium">
      <div>
        <h1 className="font-bold text-[24px]">Salman</h1>
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize p-4 hover:text-blue-500"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Hamburger Section */}
      {nav && (
        <ul className="flex flex-col items-center absolute top-0 left-0 w-screen h-screen justify-center bg-white text-neutral-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize py-6 hover:text-blue-600 text-3xl px-6 "
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
          <a
            download=""
            href={Res}
            target="_blank"
            className="text-3xl py-6 cursor-pointer hover:text-blue-600 px-6"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1r0OWQ7kwW7jQsQZ6a9TYiQ328Yhua4FD/view?usp=sharing",
                "_blank"
              )
            }
          >
            Resume
          </a>
        </ul>
      )}

      <a
        download=""
        href={Res}
        target="_blank"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1r0OWQ7kwW7jQsQZ6a9TYiQ328Yhua4FD/view?usp=sharing",
            "_blank"
          )
        }
        smooth
        className="py-2 px-4 duration-200 border hidden md:flex bg-neutral-800 text-white rounded-md hover:bg-blue-600"
      >
        Resume
      </a>
    </div>
  );
};

export default NavBar;
