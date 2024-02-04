import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import Modal from "./Modal";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playVideo, setPlayVideo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const playHandler = () => {
    if (movie) {
      setIsModalOpen(true);
      // Replace "VIDEO_ID" with the actual video ID or URL parameter from your source
      setPlayVideo("VIDEO_ID");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPlayVideo(null);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${
          movie
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : "https://via.placeholder.com/1920x1080"
        })`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_overlay">
        <div className="banner_container">
          <h1 className="banner_title">
            {movie && (movie.title || movie.name || movie.contents)}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button" onClick={playHandler}>
              Watch Now
            </button>
            <button className="banner_button" onClick={openModal}>
              More Info
            </button>
          </div>
          <div className="banner_description">{movie?.overview}</div>
        </div>
      </div>

      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && (
        <Modal movie={movie} closeModal={closeModal} playVideo={playVideo} />
      )}
    </header>
  );
}

export default Banner;
