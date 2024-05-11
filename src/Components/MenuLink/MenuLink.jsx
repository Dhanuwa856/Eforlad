import React from "react";
import "./MenuLink.css";
import { NavLink } from "react-router-dom";

const MenuLink = (props) => {
  return (
    <a href={props.linkurl} className="menu-link">
      {props.linkname}
    </a>
  );
};

export default MenuLink;
