import React from "react";
import { useContext } from "react";
import { SongContext } from "../../context/SongContext";
import LibrarySong from "./LibrarySong";

const Library = () => {
  const context = useContext(SongContext);
  const { songs } = context;
  return (
    <div className="library">
      <h1>Library</h1>
      <div>
        {songs.map((song) => (
          <LibrarySong key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
