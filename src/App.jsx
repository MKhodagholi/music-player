import React, { useContext } from "react";

import Song from "./components/song-palyer/Song";
import Player from "./components/song-palyer/Player";
import Library from "./components/library/Library";

import "./styles/app.scss";
import { SongContext } from "./context/SongContext";
import Nav from "./components/Nav/Nav";

function App() {
  const context = useContext(SongContext);
  const { libraryIsOpen } = context;
  return (
    <div className={`app ${libraryIsOpen === true ? "library-open" : ""}`}>
      <Nav />
      <Library />
      <Song />
      <Player />
    </div>
  );
}

export default App;
