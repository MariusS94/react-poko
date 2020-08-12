import React from "react";
import "./ListItemText.css";

function ListItemText({ primary, secondary }) {
  return (
    <div className="listItemText">
      <span className="listItemText__primary">{primary}</span>
      <span className="listItemText__secondary">{secondary}</span>
    </div>
  );
}

export default ListItemText;
