import React, { useState } from "react";
import "./NavBar.css";
import Logo_icon from "../../assets/logo.png";
import MenuLink from "../MenuLink/MenuLink";

const NavBar = () => {
  const [fixed, setFixed] = useState(false);

  const nav_fixed = () => {
    if (window.scrollY >= 20) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", nav_fixed);

  return (
    <nav
      className={
        fixed ? "nav-bar container-fuild fixed" : "nav-bar container-fuild"
      }
    >
      <div className="nav-logo">
        <a href="/">
          <img src={Logo_icon} alt="" />
        </a>
      </div>
      <div className="nav-menu">
        <MenuLink linkname="Home" linkurl="/" />
        <MenuLink linkname="About" linkurl="/about" />
        <MenuLink linkname="Travel" linkurl="/travel" />
        <MenuLink linkname="Blog" linkurl="/blog" />
        <MenuLink linkname="Contact Us" linkurl="/contact" />
      </div>
    </nav>
  );
};

export default NavBar;
