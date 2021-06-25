import React from "react";
import { BellFill, GearFill } from "react-bootstrap-icons";

function Profile({ className }) {
  const ImageStyle = {
    height: "2rem",
    width: "auto",
  };
  const labelStyle = {
    fontSize: "small",
    textWrap: "no-wrap",
  };
  return (
    <div
      className={`${className} d-flex align-items-center justify-content-start w-auto`}
    >
      <BellFill className="me-3" />
      <GearFill className="me-3" />
      <div className="p-0 m-0">
        <div className="d-flex align-items-center justify-content-start theme-secondary-black rounded-3">
          <div className="py-1 px-2 m-0 d-flex align-items-center justify-content-center theme-tertiary-black rounded-3">
            <img
              src="https://avatars.githubusercontent.com/u/55191873?v=4"
              alt="neeraj profile"
              style={ImageStyle}
              className="w-auto rounded-3"
            />
          </div>
          <div className="p-0 m-0 d-flex align-items-center justify-content -center overflow-hidden">
            <p
              className="fw-bold text-capitalize px-2 m-0 w-100 text-center"
              style={labelStyle}
            >
              Neeraj Gupta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
