import React from "react";
import "./tags.css";

function Tags({ name }) {
  return (
    <div className="main-tags">
      <span className="tags">{name}</span>
    </div>
  );
}

export default Tags;
