import React from "react";
import "../style/body.css";
import Card from "./Card";
import requests from "./card-data";
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
import six from "../assets/6.svg";
import seven from "../assets/7.svg";
import eight from "../assets/8.svg";
import download from "../assets/download.jpg"
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
      <h2 className="body-title">Top Animes </h2>
    <div className="Top__week">
    <div className="body__number"><img className="onee" src={one}/><img className="img__number " src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" alt="img" /> </div>
    <div className="body__number"><img className="onee2" src={two}/> <img className="img__number one2" src="https://i1.sndcdn.com/artworks-000141401318-xyyunq-t500x500.jpg" alt="img" />  </div>
    <div className="body__number"><img className="one3" src={three}/> <img className="img__number one1" src="https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_UY1200_CR99,0,630,1200_AL_.jpg" alt="img" />  </div>
    <div className="body__number"><img className="onee4" src={four}/> <img className="img__number one1" src={download} alt="img" /></div>
    
    <div className="body__number"><img className="onee6" src={five}/> <img className="img__number one1" src="https://i1.sndcdn.com/artworks-000524536920-ukpwiz-t500x500.jpg" alt="img" /> </div>
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
