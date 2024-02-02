import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = "http://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData(callback) {
      // eslint-disable-next-line no-undef
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>{" "}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${islargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {/* Assuming 'name' is a property of the 'title' object */}
      {/* Other content */}
    </div>
  );
}
export default Row;
