import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { SongContext } from "../../context/SongContext";
import { useEffect } from "react";
import { playAudio } from "../../asset/utils";

const Player = () => {
  const context = useContext(SongContext);
  const {
    changeIsPlaying,
    audioRef,
    isPlaying,
    songInfo,
    setSongInfo,
    currentSong,
    songs,
    setCurrentSong,
    setSongs,
  } = context;
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    changeIsPlaying();
  };

  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((songInSongs) => {
      if (songInSongs.id === nextPrev.id) {
        return { ...songInSongs, active: true };
      } else {
        return { ...songInSongs, active: false };
      }
    });
    setSongs(newSongs);
  };

  const skipTrackHandler = async (direction) => {
    const indexCurrentSong = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    if (direction === "skip-back") {
      let prevSong = (indexCurrentSong - 1) % songs.length;
      if (prevSong < 0) prevSong += songs.length;
      await setCurrentSong(songs[prevSong]);
      activeLibraryHandler(songs[prevSong]);
    } else if (direction === "skip-forward") {
      const nextSong = (indexCurrentSong + 1) % songs.length;
      await setCurrentSong(songs[nextSong]);
      activeLibraryHandler(songs[nextSong]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const trackAnimate = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(90deg,${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnimate} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("skip-back");
          }}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("skip-forward");
          }}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
