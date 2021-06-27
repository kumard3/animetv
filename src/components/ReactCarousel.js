import React,{useState,useEffect} from "react";
import axios from 'axios'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import '../style/carousel.css'

const ReactCarousel = ({fetchUrl}) =>   {
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
    <Carousel className="containe">
      {movies.map((ani) => {
        return (
          <img
            className="carded"
            src={`https://image.tmdb.org/t/p/original${ani.poster_path}`}
            alt="test"
          />
        );
      })}
    </Carousel>
  );
}
export default ReactCarousel
