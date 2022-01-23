import { createContext } from "react";

import { songs } from "../asset/utils";

const SongContext = createContext({
  songs: [],
  currentSong: {},
  setCurrentSong: () => {},
});

const SongProvider = ({ children }) => {
  const totalSongs = songs;
  const [currentSong, setCurrentSong] = useState(totalSongs[0]);
  const value = { songs: totalSongs, currentSong, setCurrentSong };

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

export { SongProvider, SongContext };
