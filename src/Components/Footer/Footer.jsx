import React from "react";
import "./Footer.css";
import Img01 from "../../assets/icon/facebook.png";
import Img02 from "../../assets/icon/instagram.png";
import Img03 from "../../assets/icon/linkedin.png";
import Img04 from "../../assets/icon/Twitter.png";

const Footer = () => {
  return (
    <div className="footer container-fuild">
      <div className="container">
        <div className="social-icons">
          <a href="/">
            <img src={Img01} alt="" />
          </a>
          <a href="/">
            <img src={Img02} alt="" />
          </a>
          <a href="/">
            <img src={Img03} alt="" />
          </a>
          <a href="/">
            <img src={Img04} alt="" />
          </a>
        </div>
      </div>
      <div className="container container02">
        <div className="contact-us">
          <h3>CONTACT US</h3>
          <p>123 Second Street Fifth</p>
          <p>Avenue,</p>
          <p>Manhattan, New York</p>
          <p>+987 654 3210</p>
        </div>
        <div className="links">
          <h3>ADDITIONAL LINKS</h3>
          <p>about us</p>
          <p>Terms and conditions</p>
          <p>Privacy policy</p>
          <p>News</p>
          <p>Contact us</p>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <div className="name-input">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea name="" id="" placeholder="Comment"></textarea>
          <button className="footer-btn">Submit</button>
        </div>
      </div>
      <hr />
      <p className="copy-text">
        Copyright 2024 All Right Reserved By Dhanushka Rathnauaka
      </p>
    </div>
  );
};

export default Footer;
