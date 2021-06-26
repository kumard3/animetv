import React,{useState,useEffect} from "react";
import "../style/card.css";
import test from "../assets/test.png";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import axios from 'axios'
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
          <animated.img
            className="card"
            src={`https://image.tmdb.org/t/p/original${ani.poster_path}`}
            style={{
              ...style,
            }}
          />
        );
      })}
    </div>
  );
}

export default Card;
