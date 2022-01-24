import React, { useContext } from "react";

import { SongContext } from "../../context/SongContext";
import { playAudio } from "../../asset/utils";

const LibrarySong = ({ song }) => {
  const context = useContext(SongContext);
  const { isPlaying, audioRef, setCurrentSong, songs, setSongs } = context;

  const clickSongHandler = (song) => {
    setCurrentSong(song);
    const newSongs = songs.map((songInSongs) => {
      if (songInSongs === song) {
        return { ...song, active: true };
      } else {
        return { ...songInSongs, active: false };
      }
    });
    setSongs(newSongs);
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      className={`library-song ${song.active && "selected"}`}
      onClick={() => clickSongHandler(song)}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
