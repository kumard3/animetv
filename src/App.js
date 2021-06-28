import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requests from "./components/card-data";
import "./App.css";
import CardInfo from "./components/CardInfo";
import axios from "axios";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Video from "./components/Video";

function App() {
  const [anime1, setAnime1] = useState([]);
  const [anime2, setAnime2] = useState([]);
  const [anime3, setAnime3] = useState([]);
  const [anime4, setAnime4] = useState([]);
  const [anime5, setAnime5] = useState([]);
  const [anime6, setAnime6] = useState([]);
  const [anime7, setAnime7] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request1 = await axios.get(requests.fetchPage1);
      const request2 = await axios.get(requests.fetchPage2);
      const request3 = await axios.get(requests.fetchPage3);
      const request4 = await axios.get(requests.fetchPage4);
      const request5 = await axios.get(requests.fetchPage5);
      const request6 = await axios.get(requests.fetchPage6);
      const request7 = await axios.get(requests.fetchPage7);
      setAnime1(request2.data.results);
      setAnime2(request2.data.results);
      setAnime3(request3.data.results);
      setAnime4(request4.data.results);
      setAnime5(request5.data.results);
      setAnime6(request6.data.results);
      setAnime7(request7.data.results);
    }
    fetchData();
  }, []);
  console.log(anime1);
  let allData = [
    ...anime1,
    ...anime2,
    ...anime3,
    ...anime4,
    ...anime5,
    ...anime6,
    ...anime7,
  ];
  return (
    <div className="app">
    <Router>
    <Route exact path="/">
    <Header />
          <Body />
          <Footer/>
        </Route>
        <Route path="/anime/:id">
          <CardInfo allData={allData} />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
      </Router>
    </div>
  );
}

export default App;
