import React from "react";
import YouTube from "react-youtube";

const Modal = ({ movie, closeModal, playVideo }) => {
  const opts = {
    width: "100%", // Use 100% width of the container
    height: "100%", // Use 100% height of the container
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // You can do something when the video player is ready
    // console.log("Video Player is ready:", event);
  };

  const onError = (error) => {
    // Handle any errors that occur.
    // console.error("Error playing the video:", error);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{movie.title || movie.name || movie.contents}</h2>
        <p>{movie.overview}</p>
        {playVideo && (
          <div className="youtube-video-container">
            <YouTube
              videoId={playVideo}
              opts={opts}
              className="youtube-video"
              onReady={onReady}
              onError={onError}
            />
          </div>
        )}
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default Modal;
