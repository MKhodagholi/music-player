import React from "react";

import Song from "./components/song-palyer/Song";
import Player from "./components/song-palyer/Player";
import Library from "./components/library/Library";

import "./styles/app.scss";
import { SongProvider } from "./context/SongContext";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <SongProvider>
      <div className="app">
        <Nav />
        <Library />
        <Song />
        <Player />
      </div>
    </SongProvider>
  );
}

export default App;
