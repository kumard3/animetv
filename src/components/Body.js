import React from "react";
import "../style/body.scss";
import Card from "./Card";
import requests from "../api/card-data";
import ReactCarousel from "./ReactCarousel";
import Rectangle from "../assets/Rectangle.png";
import info from "../assets/info.svg";
import play from "../assets/play.svg";
import list from "../assets/list.svg";
import one from "../assets/one.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";
import five from "../assets/5.svg";
import data from "../api/data";
import Naruto from "./Naruto";
import Attack_titan from "./Attack_titan";
import DeathNote from "./DeathNote";
import kisan from "./Kisan";
import Kisan from "./Kisan";
import OnePunch from "./OnePunch";

function Body() {
  return (
    <div className="body">
      <ReactCarousel autoPlay="true" fetchUrl={requests.fetchPage1} />
      <img className="back " src={Rectangle} />
      <div className="genre__section">
        <span className="genre__h3">
          Adventure <span>•</span>Fiction<span>•</span> Dark fantasy
          <span>•</span> Martial Arts
        </span>
      </div>

      <div className="button__section">
        <div className="mylist">
          {" "}
          <img className="mylistt" src={list} />
          My List
        </div>
        <div className="myplay">
          {" "}
          <button className="myplaybutton">
            <img className="playy" src={play} />
            Play{" "}
          </button>
        </div>
        <div className="mylist">
          {" "}
          <img className="mylistt" src={info} />
          Info
        </div>
      </div>
      <h2 className="body-title">Top Animes </h2>
      <div className="Top__week">
        <div className="body__number">
          <img className="onee" src={one} />
          <img className="img__number " src={data[0].img} alt="img" />{" "}
          <Naruto   />
        </div>
        <div className="body__number">
          <img className="onee2" src={two} />{" "}
          <img className="img__number one2" src={data[1].img} alt="img" />{" "}
          <Attack_titan className="img__number " />
          </div>
        <div className="body__number">
          <img className="one3" src={three} />{" "}
          <img className="img__number one1" src={data[2].img} alt="img" />{" "}
          <DeathNote className="img__number " />
          </div>
        <div className="body__number">
          <img className="onee4" src={four} />{" "}
          <img className="img__number one1" src={data[3].img} alt="img" />
          <Kisan/>
          </div>

        <div className="body__number">
          <img className="onee6" src={five} />{" "}
          <img className="img__number one1" src={data[4].img} alt="img" />{" "}
          <OnePunch/>
          </div>
      </div>

      <div className="card-seaction">
        <h2 className="body-title">Trending Anime </h2>
        <Card fetchUrl={requests.fetchPage2} />
        <h2 className="body-title">Watch Again </h2>

        <Card fetchUrl={requests.fetchPage3} />
        <h2 className="body-title">My List </h2>

        <Card fetchUrl={requests.fetchPage4} />
        <h2 className="body-title">Action Anime </h2>

        <Card fetchUrl={requests.fetchPage5} />
        <h2 className="body-title">Drama Anime </h2>

        <Card fetchUrl={requests.fetchPage6} />
        <h2 className="body-title">Trending Movies </h2>

        <Card fetchUrl={requests.fetchPage7} />
      </div>
    </div>
  );
}

export default Body;
