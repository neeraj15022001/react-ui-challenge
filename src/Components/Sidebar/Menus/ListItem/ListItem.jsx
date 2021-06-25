import React from "react";

function ListItem({ icon, title, className }) {
  const listItemText = { fontSize: "small" };
  return (
    <div
      className={`${className} w-100 d-flex align-items-center justify-content-start py-2`}
    >
      {icon}
      <p className="ms-4 fw-bold text-capitalize" style={listItemText}>
        {title}
      </p>
    </div>
  );
}

export default ListItem;
