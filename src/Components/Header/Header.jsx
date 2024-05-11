import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header container-fuild">
      <div className="container">
        <p>
          <i class="fa-solid fa-location-dot"></i> 145.street road new York
        </p>
        <p>
          <i class="fa-solid fa-phone"></i> +71 5678954378
        </p>
        <p>
          <i class="fa-solid fa-envelope"></i> Demo@hmail.com
        </p>
      </div>
    </div>
  );
};

export default Header;
