import React, { useContext } from "react";

import { SongContext } from "../../context/SongContext";

const LibrarySong = ({ song }) => {
  const context = useContext(SongContext);
  const { isPlaying, audioRef, setCurrentSong } = context;

  const clickSongHandler = (song) => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div className="library-song" onClick={() => clickSongHandler(song)}>
      <img src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
