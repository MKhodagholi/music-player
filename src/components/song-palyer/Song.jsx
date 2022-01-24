import React from "react";
import { useContext } from "react";
import { SongContext } from "../../context/SongContext";

const Song = () => {
  const context = useContext(SongContext);
  const {
    songs,
    currentSong,
    setCurrentSong,
    audioRef,
    timeUpdateHandler,
    isPlaying,
  } = context;

  const endSongHandler = async () => {
    const indexCurrentSong = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    const nextSong = (indexCurrentSong + 1) % songs.length;
    await setCurrentSong(songs[nextSong]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={endSongHandler}
      ></audio>
    </div>
  );
};

export default Song;
