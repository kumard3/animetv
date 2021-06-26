import { useState, useEffect } from "react";
import "./App.css";
import CardInfo from "./components/CardInfo";
import axios from "axios";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      async function getData() {
        const request = await axios.get(
          `https://api.themoviedb.org/3/keyword/210024/movies?api_key=206b725c7666fcf8a08aade57ba94850&page=8`
        );
        setAnime(...anime, request.data.results);
      }
      getData();
    }
   
  }, []);

  return (
    <div className="app">
      <Header />
      <Body  />
    </div>
  );
}

export default App;
