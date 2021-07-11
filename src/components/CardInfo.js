import React from "react";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "../style/cardinfo.scss";
import Rectangle from "../assets/Rectangle.png";
import playwhite from "../assets/playwhite.svg";
import save from "../assets/save.svg";
import { Link } from "react-router-dom";

const CardInfo = ({ allData }) => {
  const { id } = useParams();
  const animeData = allData.filter((book) => book.id === parseInt(id));
  const anime = animeData[0];
  console.log(anime);

  if (anime) {
    return (
      <div className="card__info">
        <Link to="/">
          <img className="arrow" src={arrow} />
        </Link>

        <img
          className="cardinfo__img"
          src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`}
          alt="card-img"
        />
        <img className="back back1" src={Rectangle} />
        <div className="cardinfo__wrapper">
          <h2>{anime.title} </h2>
          <div className="genes">
            <span> Adventure </span>
            <span> Drama </span>
            <span> Adventure </span>
          </div>
          <p>{anime.overview}</p>
        </div>

        <div className="bottom___section">
          <button className="bottom___button">
            <img className="playwhite" src={playwhite} alt="" />
            <h3>Watch Now </h3>
          </button>
          <button className="bottom___button2">
            <img className="save" src={save} alt="" />
            <h3>Save </h3>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CardInfo;
