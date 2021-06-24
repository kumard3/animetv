import React from "react";
import "../style/footer.css";
import home from "../assets/home.png";
function Footer() {
  return (
    <div className="footer">

      <div className="home">
        <img className="home-image" src={home} alt="home" />
        <span className="span-home">home</span>
      </div>
      <div className="home">
        <img className="home-image" src={home} alt="home" />
        <span className="span-home">home</span>
      </div>
      <div className="home">
        <img className="home-image" src={home} alt="home" />
        <span className="span-home">home</span>
      </div>

    </div>
  );
}

export default Footer;
