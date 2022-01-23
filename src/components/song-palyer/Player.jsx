import React from "react";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <h1>Skip-back</h1>
        <h2>Play</h2>
        <h3>Skip-forward</h3>
      </div>
    </div>
  );
};

export default Player;
