import React from "react";
import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

function Github() {
  return (
    <div>
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px", color: "#064e3b" }}
      >
        GitHub Calender
      </h1>
      <div>
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
