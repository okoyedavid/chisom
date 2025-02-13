import { useEffect, useRef } from "react";

const BackgroundMusic = ({ isPlaying }) => {
  const audioRef = useRef(new Audio("/smile.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio when unmounted
    };
  }, [isPlaying]);

  return null;
};
export default BackgroundMusic;
