import React from "react";
import { Container } from "react-bootstrap";

function ProgressBar({ startingTime, endingTime, className }) {
  return (
    <Container
      className={`${className} d-flex align-items-center justify-content-center`}
    >
      <div className="w-75 d-flex align-items-center justify-content-between">
        <p>{startingTime}</p>
        <input type="range" name="music-progress" id="music-progress" />
        <p>{endingTime}</p>
      </div>
    </Container>
  );
}

export default ProgressBar;
