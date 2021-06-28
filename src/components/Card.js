import React, { useState, useEffect } from "react";
import "../style/card.css";

import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import axios from "axios";
import { Link } from "react-router-dom";
import VideoDrawer from "./Naruto";
function Card({ fetchUrl }) {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));
  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });
  const clamp = (value, clampAt) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const handleclick = () => {

   

  }
  console.log(handleclick)
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="container" {...bind()}>
      {movies.map((ani) => {
        return (
          <>
            <Link to={`/anime/${ani.id}`}>
              {" "}
              <animated.img
              onClick={handleclick}
                className="card"
                src={`https://image.tmdb.org/t/p/w200${ani.poster_path}`}
                style={{
                  ...style,
                }}
              />
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Card;
