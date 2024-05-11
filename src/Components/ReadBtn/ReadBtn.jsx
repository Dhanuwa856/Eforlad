import React from "react";
import "./ReadBtn.css";

const ReadBtn = (props) => {
  return (
    <a href="/readmore">
      <button className="read-btn">{props.btntitle}</button>
    </a>
  );
};

export default ReadBtn;
