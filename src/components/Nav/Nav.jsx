import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SongContext } from "../../context/SongContext";

const Nav = () => {
  const context = useContext(SongContext);

  const { setLibraryIsOpen, libraryIsOpen } = context;

  const libraryOnClickHandler = () => {
    setLibraryIsOpen((prevState) => !prevState);
    console.log(libraryIsOpen);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={libraryOnClickHandler}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
