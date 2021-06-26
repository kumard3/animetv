import React from "react";
import arrow from "../assets/arrow.png";
import "../style/cardinfo.css";
const CardInfo = () => {
  return (
    <div className="card__info">
    <img className="arrow" src={arrow} />
      <img
        className="cardinfo__img"
        src="https://cdn.myanimelist.net/images/anime/9/84460.jpg"
        alt="card-img"
      />
      <div className="cardinfo__wrapper">
        <h2>Boruto: Naruto Next Generations </h2>
        <div >
          {" "}
          <span className="rating " >8.6 </span>{" "}
        </div>
        <div className="genes">
          <span> Adventure </span>
          <span> Adventure </span>
          <span> Adventure </span>
        </div>
        <p>
          Following the successful end of the Fourth Shinobi World War,
          Konohagakure has been enjoying a period of peace, prosperity, and
          extraordinary technological advancement. This is all due to the
          efforts of the Allied Shinobi Forces and the village's Seventh Hokage,
          Naruto Uzumaki. Now resembling a modern metropolis, Konohagakure has
          changed, particularly the life of a shinobi. Under the watchful eye of
          Naruto and his old comrades, a new generation of shinobi has stepped
          up to learn the ways of the ninja. Boruto Uzumaki is often the center
          of attention as the son of the Seventh Hokage. Despite having
          inherited Naruto's boisterous and stubborn demeanor, Boruto is
          considered a prodigy and is able to unleash his potential with the
          help of supportive friends and family. Unfortunately, this has only
          worsened his arrogance and his desire to surpass Naruto which, along
          with his father's busy lifestyle, has strained their relationship.
          However, a sinister force brewing within the village may threaten
          Boruto's carefree life. New friends and familiar faces join Boruto as
          a new story begins in Boruto: Naruto Next Generations. [Written by MAL
          Rewrite]{" "}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
