import React from "react";
import { Search as SearchGlass } from "react-bootstrap-icons";

function Search({ className }) {
  const searchStyle = {
    borderRadius: "0.7rem",
    border: "2px solid var(--themeGrey)",
  };
  const inputStyle = {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
  };
  return (
    <div
      className={`${className} d-flex align-items-center justify-content-start bg-dark p-2`}
      style={searchStyle}
    >
      <SearchGlass className="me-2" />
      <input
        type="text"
        placeholder="Type here to search"
        className="placeholder-white"
        style={inputStyle}
      />
    </div>
  );
}

export default Search;
