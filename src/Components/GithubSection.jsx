import React, { useEffect } from "react";
import Github from "./github";

import AOS from "aos";
import "aos/dist/aos.css";

const GithubSection = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

  return (
    <>
      <div className="pt-4 md:pt-20 pb-20 md:pb-24 flex flex-col items-center px-6 text-center md:px-16 text-gray-900 dark:text-white bg-white dark:bg-gray-900 font-contact">
        <Github />
      </div>
      <div className="pb-24 flex flex-col items-center font-contact text-gray-900 dark:text-white bg-white dark:bg-gray-900 px-6 md:px-0">
        <h2
          className="text-2xl text-rose-500 pb-8 font-extrabold"
          data-aos="fade-down"
        >
          GITHUB STATS
        </h2>
        <img
          src="https://github-readme-stats-salmanajani.vercel.app/api?username=SalmanAjani&show_icons=true"
          alt="Salman-Github-Stats"
          data-aos="fade-down"
        />
      </div>
    </>
  );
};

export default GithubSection;
