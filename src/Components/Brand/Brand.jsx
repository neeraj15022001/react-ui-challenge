import React from "react";
import { Soundwave } from "react-bootstrap-icons";

function Brand({ className }) {
  return (
    <div
      className={`d-flex align-items-center justify-content-start w-100 ${className}`}
    >
      <Soundwave className="fs-5 me-3" />
      <p className="text-capitalize fs-6" style={{ fontWeight: "800" }}>
        groovvy
      </p>
    </div>
  );
}

export default Brand;
