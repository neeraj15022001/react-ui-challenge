import React from "react";

function ArtistCard({ image, bgColor, artistName, playCount, className }) {
  const imageBoxStyle = {
    width: "5.5rem",
    height: "5rem",
    backgroundColor: bgColor,
    backgroundImage: `url(${image})`,
    backgroundSize : "contain",
    backgroundPosition: "center", 
    backgroundRepeat : "no-repeat"
  };
  return (
    <div className={`${className} d-flex flex-column align-items-start justify-content-center`}>
      <div style={imageBoxStyle} className="rounded-3 mb-2">
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center w-100">
        <p className="fs-6 fw-bold text-capitalize text-center text-truncate">{artistName}</p>
        <p className="fs-small text-themeGrey text-capitalize text-center">{`${playCount}M plays`}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
