import React from "react";
import { useContext } from "react";
import { SongContext } from "../../context/SongContext";

const Song = () => {
  const context = useContext(SongContext);
  const { songs, currentSong, setCurrentSong, audioRef } = context;

  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div> 
  );
};

export default Song;
