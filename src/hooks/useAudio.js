import { useEffect, useRef, useState } from "react";

export default function useAudio(audioFile) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(audioFile);

    audio.loop = true;
    audio.volume = 0;

    audioRef.current = audio;

    attemptAutoplay();

    const startOnInteraction = () => {
      if (!audioRef.current.paused) return;

      fadeIn();

      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
      window.removeEventListener("scroll", startOnInteraction);
    };

    window.addEventListener("click", startOnInteraction, {
      once: true,
    });

    window.addEventListener("touchstart", startOnInteraction, {
      once: true,
    });

    window.addEventListener("scroll", startOnInteraction, {
      once: true,
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const attemptAutoplay = async () => {
    try {
      await audioRef.current.play();
      fadeIn();
    } catch (err) {
      console.log("Autoplay blocked. Waiting for first interaction.");
    }
  };

  const fadeIn = () => {
    const audio = audioRef.current;

    audio.play();

    let volume = 0;

    const interval = setInterval(() => {
      volume += 0.04;

      if (volume >= 0.40) {
        volume = 0.40;
        clearInterval(interval);
      }

      audio.volume = volume;
    }, 120);

    setIsPlaying(true);
  };

  const fadeOut = () => {
    const audio = audioRef.current;

    let volume = audio.volume;

    const interval = setInterval(() => {
      volume -= 0.04;

      if (volume <= 0) {
        volume = 0;
        clearInterval(interval);

        audio.pause();
      }

      audio.volume = volume;
    }, 80);

    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      fadeIn();
    } else {
      fadeOut();
    }
  };

  return {
    isPlaying,
    toggleMusic,
  };
}