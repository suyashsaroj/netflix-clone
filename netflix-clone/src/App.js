import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <h1>HELLO FRONTEND DEVELOPERS</h1>
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        islargeRow
      />
      <Row title={"TOP RATED"} fetchUrl={requests.fetchTopRated} />
      <Row title={"NOW PLAYING"} fetchUrl={requests.fetchNowPlaying} />
      <Row title={"ACTION"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"COMEDY"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"HORROR"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"POPULAR"} fetchUrl={requests.fetchPopular} />
      <Row title={"ROMANCE"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"TRENDING"} fetchUrl={requests.fetchTrending} />
      <Row title={"TRENDING MOVIES"} fetchUrl={requests.fetchTrendingMovies} />
      <Row title={"TRENDING TV"} fetchUrl={requests.fetchTrendingTv} />
      <Row title={"UPCOMING"} fetchUrl={requests.fetchUpcoming} />
    </div>
  );
}

export default App;
