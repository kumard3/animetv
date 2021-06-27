import React from "react";
import "../style/body.css";
import Card from "./Card";
import requests from "./card-data";
import ReactCarousel from "./ReactCarousel";
import Rectangle from "../assets/Rectangle.png";
import info from "../assets/info.svg";
import play from "../assets/play.svg";
import list from "../assets/list.svg";

function Body() {
  return (
    <div className="body">
      <ReactCarousel autoPlay="true" fetchUrl={requests.fetchPage1} />
      <img className="back" src={Rectangle} />
      <div className="genre__section" >
        <span className="genre__h3" >
          Adventure <span>•</span>Fiction<span>•</span> Dark fantasy<span>•</span> Martial
          Arts
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
    <div className="Top__week">
    <h2 className="body-title">Naruto </h2>
    <h2 className="body-title"> Attack on Titan </h2>
    <h2 className="body-title"> Death Note </h2>
    <h2 className="body-title">Dragon Ball Z </h2>
    <h2 className="body-title">Jujutsu Kaisen</h2>
    <h2 className="body-title">Bleach </h2>
    <h2 className="body-title">One-Punch Man </h2>
    <h2 className="body-title">Demon Slayer: Kimetsu No Yaiba </h2>
    <h2 className="body-title">Clannad </h2>
    </div>

      <div className="card-seaction">
        <h2 className="body-title">Trending Movies </h2>
        <Card fetchUrl={requests.fetchPage2} />
        <h2 className="body-title">Trending Movies </h2>
        
        <Card fetchUrl={requests.fetchPage3} />
        <h2 className="body-title">Trending Movies </h2>
        
        <Card fetchUrl={requests.fetchPage4} />
        <h2 className="body-title">Trending Movies </h2>
        
        <Card fetchUrl={requests.fetchPage5} />
        <h2 className="body-title">Trending Movies </h2>
        
        <Card fetchUrl={requests.fetchPage6} />
        <h2 className="body-title">Trending Movies </h2>
        
        <Card fetchUrl={requests.fetchPage7} />
      </div>
    </div>
  );
}

export default Body;
