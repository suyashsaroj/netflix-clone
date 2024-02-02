import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // eslint-disable-next-line no-undef
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log("Fetching", setMovie);
  console.log(movie);

  return (
    <header className="banner">
      <div className="banner_container">
        <h1></h1>
      </div>
    </header>
  );
}

export default Banner;
