import React from "react";
import "../style/footer.css";
import home from "../assets/home.png";
import playwhite from "../assets/playwhite.svg";
import profile from "../assets/profile.png";
function Footer() {
  return (
    <div className="footer">

      <div className="home">
        <img className="home-image" src={home} alt="home" />
        <span className="span-home">home</span>
      </div>
      <div className="home">
        <img className="home-image" src={playwhite} alt="home" />
        <span className="span-home">videos</span>
      </div>
      <div className="home">
        <img className="profile-image" src={profile} alt="home" />
        <span className="span-home">profile</span>
      </div>

    </div>
  );
}

export default Footer;
