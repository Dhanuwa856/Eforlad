import React from "react";
import "./About.css";
import Title from "../Title/Title";
import Plane_img from "../../assets/plane-img.png";

const About = () => {
  return (
    <div className="about">
      <Title sectiontitle="ABOUT OUR TRAVEL AGENCY" />
      <p className="sub-p">
        fact that a reader will be distracted by the readable content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it
        has a more-or-less normal distribution of letters
      </p>
      <div className="about-text-box container border-gradient">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          thereThere are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there
        </p>
        <img src={Plane_img} alt="" className="plane-img" />
      </div>
    </div>
  );
};

export default About;
