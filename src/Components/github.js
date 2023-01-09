import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

import AOS from "aos";
import "aos/dist/aos.css";

function Github() {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

  return (
    <div>
      <h1
        className="text-2xl text-rose-500 pb-12 font-extrabold"
        data-aos="fade-down"
      >
        GITHUB CALENDAR
      </h1>
      <div data-aos="fade-down">
        <GitHubCalendar
          username="SalmanAjani"
          blockSize={15}
          blockMargin={5}
          fontSize={20}
        />
      </div>
    </div>
  );
}

export default Github;
