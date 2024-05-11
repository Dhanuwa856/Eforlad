import React from "react";
import "./Hero.css";
import ReadBtn from "../ReadBtn/ReadBtn";

const Hero = () => {
  return (
    <div className="hero container-fuild">
      <div className="container">
        <div className="main-title">
          <h2>
            <span>AMERICA</span>
          </h2>
          <h2>AMAZING TOUR</h2>
        </div>
        <ReadBtn btntitle="read more" />
        <div className="tour-tag">
          <h4>Find Your Tour</h4>
        </div>
        <div className="input-area">
          <div className="input-area-top">
            <label htmlFor="">
              <h5>Keywords</h5>
              <input type="text" />
            </label>
            <label htmlFor="">
              <h5>category</h5>
              <div className="select-group">
                <select>
                  <option value="1">Any</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 2</option>
                  <option value="1">Option 3</option>
                </select>
                <select>
                  <option value="1">Any</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 2</option>
                  <option value="1">Option 3</option>
                </select>
              </div>
            </label>
            <label htmlFor="">
              <h5>Min Price</h5>
              <input type="number" name="" id="" />
            </label>
          </div>
          <div className="input-area-bottom">
            <label htmlFor="">
              <h5>Duration</h5>
              <input type="text" placeholder="Any" />
            </label>
            <label htmlFor="">
              <h5>Date</h5>
              <input type="date" name="" id="" />
            </label>
            <label htmlFor="">
              <h5>Max Price</h5>
              <input type="number" name="" id="" />
            </label>
          </div>
          <div className="search-btn">
            <ReadBtn btntitle="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
