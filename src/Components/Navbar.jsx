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
      <div>
        <h1 className="text-5xl font-signature pt-2">Salman</h1>
      </div>

      <ul className="hidden sm:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-[18px] text-white hover:scale-105 duration-200 hover:text-emerald-500"
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
        className="cursor-pointer pr-4 z-10 text-white md:hidden xs:pl-60 ss:pl-80 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
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
        </ul>
      )}
    </div>
  );
};

export default NavBar;
