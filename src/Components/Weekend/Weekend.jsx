import React from "react";
import "./Weekend.css";
import Title from "../Title/Title";
import London from "../../assets/London.jpg";

const Weekend = () => {
  return (
    <div className="weekend container-fuild">
      <Title sectiontitle="WEEKEND IN NEW YORK, LONDON" />
      <p className="sub-p">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
      </p>
      <img src={London} alt="" />
    </div>
  );
};

export default Weekend;
