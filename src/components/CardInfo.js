import React from "react";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "../style/cardinfo.css";

import { Link } from "react-router-dom";

const CardInfo = ({ allData }) => {
  const { id } = useParams();
  const animeData = allData.filter((book) => book.id === parseInt(id));
  const anime = animeData[0];
  console.log(anime);

  if (anime) {
    return (
      <div className="card__info">
      <div className="duration" >
      <Link to="/">
      <img className="arrow" src={arrow} />
      </Link>
      </div>
        <img
          className="cardinfo__img"
          src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`}
          alt="card-img"
        />
        <div className="cardinfo__wrapper">
          <h2>{anime.title} </h2>
          <div>
            {" "}
            <span className="rating ">{anime.popularity}</span>{" "}
          </div>
          <div className="genes">
            <span> Adventure </span>
            <span> Drama </span>
            <span> Adventure </span>
          </div>
          <p>{anime.overview}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CardInfo;
