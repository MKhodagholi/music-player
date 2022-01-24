import { v4 as uuidv4 } from "uuid";

export const songs = [
  {
    name: "Gentle Hills",
    artist: "Bcalm",
    cover:
      "https://vmusic.ir/wp-content/uploads/2021/12/Bcalm-Feelings-Pt.2-2021.jpg",
    audio:
      "https://db.vmusic.ir/2021/12/Bcalm - Feelings Pt.2 (2021)/128k/05) Bcalm - Gentle Hills.mp3",
    id: uuidv4(),
    color: ["#504439", "#113B50"],
    active: true,
  },
  {
    name: "Passage",
    artist: "Krynoze",
    cover:
      "https://vmusic.ir/wp-content/uploads/2021/12/Krynoze-Setting-Roots-2021.jpg",
    audio:
      "https://db.vmusic.ir/2021/12/Krynoze - Setting Roots (2021)/128k/02) Krynoze - Passage.mp3",
    id: uuidv4(),
    color: ["#38302C", "#56505B"],
    active: false,
  },
  {
    name: "Kalopsia",
    artist: "Nuver",
    cover:
      "https://vmusic.ir/wp-content/uploads/2022/01/Nuver-Kalopsia-2021.jpg",
    audio:
      "https://db.vmusic.ir/2022/01/Nuver - Kalopsia (2021)/128k/01) Nuver - Collapse.mp3",
    color: ["#FE9DAB", "#BA6FA2"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Ode To Winter",
    artist: "Coldbrew",
    cover:
      "https://vmusic.ir/wp-content/uploads/2021/12/coldbrew-ode-to-winter-2021.jpg",
    audio:
      "https://db.vmusic.ir/2021/12/coldbrew - ode to winter (2021)/128k/01) Coldbrew - Ode To Winter -.mp3",
    id: uuidv4(),
    color: ["#C4A2A1", "#FEB576"],
    active: false,
  },
  {
    name: "Drifting Memories",
    artist: "Various Artists",
    cover:
      "https://vmusic.ir/wp-content/uploads/2021/12/VA-Memories-From-Earth-2-2021.jpg",
    audio:
      "https://db.vmusic.ir/2021/12/VA - Memories From Earth 2 (2021)/128k/01) Jazzycal - Drifting Memories.mp3",
    id: uuidv4(),
    color: ["#95827C", "#181611"],
    active: false,
  },
  {
    name: "Anemone",
    artist: "Bcalm",
    cover:
      "https://vmusic.ir/wp-content/uploads/2021/12/Bcalm-Feelings-Pt.2-2021.jpg",
    audio:
      "https://db.vmusic.ir/2021/12/Bcalm - Feelings Pt.2 (2021)/128k/01) Bcalm - Anemone.mp3",
    id: uuidv4(),
    color: ["#504439", "#113B50"],
    active: false,
  },
  {
    name: "New Message",
    artist: "Various Artists",
    cover:
      "https://vmusic.ir/wp-content/uploads/2021/12/VA-Memories-From-Earth-2-2021.jpg",
    audio:
      "https://db.vmusic.ir/2021/12/VA - Memories From Earth 2 (2021)/128k/04) C4C - New Message.mp3",
    id: uuidv4(),
    color: ["#95827C", "#181611"],
    active: false,
  },
  {
    name: "Setting Roots",
    artist: "Krynoze",
    cover:
      "https://vmusic.ir/wp-content/uploads/2021/12/Krynoze-Setting-Roots-2021.jpg",
    audio:
      "https://db.vmusic.ir/2021/12/Krynoze - Setting Roots (2021)/128k/01) Krynoze - Setting Roots.mp3",
    id: uuidv4(),
    color: ["#38302C", "#56505B"],
    active: false,
  },
];

export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
