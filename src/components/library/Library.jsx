import React from "react";
import LibrarySong from "./LibrarySong";

const Library = () => {
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
