import { createContext, useRef, useState } from "react";

import { songs } from "../asset/utils";

const SongContext = createContext({
  songs: [],
  currentSong: {},
  setCurrentSong: () => {},
  audioRef: null,
  isPlaying: false,
  songInfo: {},
  setSongInfo: () => {},
  timeUpdateHandler: () => {},
});

const SongProvider = ({ children }) => {
  const totalSongs = songs;
  const [currentSong, setCurrentSong] = useState(totalSongs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ currentTime, duration });
  };

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
    songInfo,
    setSongInfo,
    timeUpdateHandler,
  };

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

export { SongProvider, SongContext };
