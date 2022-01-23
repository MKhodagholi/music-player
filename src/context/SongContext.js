import { createContext } from "react";

const SongContext = createContext({
  songs: [],
  currentSong: {},
});

const SongProvider = () => {

  const value={};

  return <SongContext.Provider value={}></SongContext.Provider>
}
