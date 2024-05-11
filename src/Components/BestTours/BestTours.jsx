import React, { useState } from "react";
import "./BestTours.css";
import Title from "../Title/Title";
import Img_01 from "../../assets/1.jpg";
import Img_02 from "../../assets/2.jpg";
import Img_03 from "../../assets/3.jpg";

const BestTours = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div className="best-tours container-fuild">
      <Title sectiontitle="THE BEST TOURS" />
      <p className="sub-p">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
      </p>
      <div className="container">
        <ul
          className="slider"
          style={{ transform: `translateX(${scrollPosition}%)` }}
        >
          <li className="slider-item">
            <img src={Img_01} alt="" />
            <h3 className="slider-title">Holiday Tour</h3>
            <p className="slider-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus eveniet consequatur placeat id laborum corporis iste eos
              dolores reprehenderit.
            </p>
          </li>
          <li className="slider-item">
            <img src={Img_02} alt="" />
            <h3 className="slider-title">New York</h3>
            <p className="slider-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus eveniet consequatur placeat id laborum corporis iste eos
              dolores reprehenderit.
            </p>
          </li>
          <li className="slider-item">
            <img src={Img_03} alt="" />
            <h3 className="slider-title">London</h3>
            <p className="slider-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus eveniet consequatur placeat id laborum corporis iste eos
              dolores reprehenderit.
            </p>
          </li>
          <li className="slider-item">
            <img src={Img_02} alt="" />
            <h3 className="slider-title">Holiday Tour</h3>
            <p className="slider-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus eveniet consequatur placeat id laborum corporis iste eos
              dolores reprehenderit.
            </p>
          </li>
          <li className="slider-item">
            <img src={Img_01} alt="" />
            <h3 className="slider-title">Holiday Tour</h3>
            <p className="slider-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus eveniet consequatur placeat id laborum corporis iste eos
              dolores reprehenderit.
            </p>
          </li>
          <li className="slider-item">
            <img src={Img_03} alt="" />
            <h3 className="slider-title">Holiday Tour</h3>
            <p className="slider-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus eveniet consequatur placeat id laborum corporis iste eos
              dolores reprehenderit.
            </p>
          </li>
        </ul>
        <div className="slider-btns">
          <button
            className={scrollPosition === 0 ? "prev-btn blue-bg" : "prev-btn"}
            onClick={() => {
              if (scrollPosition === -50) {
                setScrollPosition(0);
              }
            }}
          ></button>
          <button
            className={scrollPosition === -50 ? "next-btn blue-bg" : "next-btn"}
            onClick={() => {
              if (scrollPosition === 0) {
                setScrollPosition(-50);
              }
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default BestTours;
