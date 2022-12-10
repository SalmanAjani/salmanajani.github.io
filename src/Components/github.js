import React from "react";
import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

function Github() {
  return (
    <div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
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
