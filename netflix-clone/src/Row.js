import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "http://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, setError] = useState(null);
  const [showPlayerOverlay, setShowPlayerOverlay] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(null);
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setShowPlayerOverlay(true);
        })
        .catch((error) => {
          setError("Error fetching trailer. Please try again later.");
          console.log(error);
        });
    }
  };

  const closePlayerOverlay = () => {
    setShowPlayerOverlay(false);
    setTrailerUrl(null);
  };

  return (
    <div className="row">
      <h2 className="header_style">{title}</h2>
      {error && <p className="error_message">{error}</p>}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${islargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {showPlayerOverlay && (
        <div className="player_overlay">
          <div className="close_button" onClick={closePlayerOverlay}>
            X
          </div>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Row;
