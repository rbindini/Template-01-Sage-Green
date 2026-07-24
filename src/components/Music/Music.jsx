import React from "react";
import { FaMusic } from "react-icons/fa";

import "./Music.css";

import useAudio from "../../hooks/useAudio";
import musicFile from "../../assets/music/test.mp3";

const Music = () => {
  const { isPlaying, toggleMusic } = useAudio(musicFile);

  return (
    <button
      className={`music-player ${isPlaying ? "playing" : ""}`}
      onClick={toggleMusic}
      aria-label="Music Player"
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      <FaMusic />
      <span className="music-pulse"></span>
    </button>
  );
};

export default Music;