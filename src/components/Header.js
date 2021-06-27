import React, { useState, useEffect } from "react";
import "../style/header.css";
import profile from "../assets/profile.png";
function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        handleShow(true);
      } else handleShow(false);
    });

  }, []);

  return (
    <div className="header">
      <h2 className="logo">
        {" "}
        anime<span className="logo-img">.tv</span>
      </h2>

      {/*<img className="profile" src={profile} alt="profile" />
       */}
      <div className={`nav ${show && "nav__black"}`}>
        <div className="netflix__header" >
          <h2 className="netflix__h2"> Anime </h2>
          <h2 className="netflix__h2"> Top Anime </h2>
          <h2 className="netflix__h2"> My list </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
