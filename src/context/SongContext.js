import { createContext, useRef, useState } from "react";

import { songs } from "../asset/utils";

const SongContext = createContext({
  songs: [],
  currentSong: {},
  setCurrentSong: () => {},
  audioRef: null,
  isPlaying: false,
});

const SongProvider = ({ children }) => {
  const totalSongs = songs;
  const [currentSong, setCurrentSong] = useState(totalSongs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const changeIsPlaying = () => {
    setIsPlaying((prevState) => !prevState);
  };
  const audioRef = useRef(null);
  const value = {
    songs: totalSongs,
    currentSong,
    setCurrentSong,
    audioRef,
    isPlaying,
    changeIsPlaying,
  };

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

export { SongProvider, SongContext };
