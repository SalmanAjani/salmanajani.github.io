import React from "react";
import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

function Github() {
  return (
    <div>
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px", color: "rgb(5 150 105)" }}
      >
        GitHub Calender
      </h1>
      <div>
        <GitHubCalendar
          username="SalmanAjani"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
