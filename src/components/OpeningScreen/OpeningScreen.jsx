import { useEffect, useRef, useState } from "react";

import "./OpeningScreen.css";

import Background from "./Background";
import Envelope from "./Envelope";

const STAGES = {
  IDLE: "idle",
  PRESS: "press",
  OPEN: "open",
  CARD: "card",
  EXPAND: "expand",
};

export default function OpeningScreen({ onOpen }) {
  const [stage, setStage] = useState(STAGES.IDLE);

  const [animating, setAnimating] = useState(false);

  const timers = useRef([]);

  //----------------------------------------------------
  // Helper
  //----------------------------------------------------

  const addTimer = (callback, delay) => {
    const timer = setTimeout(callback, delay);
    timers.current.push(timer);
  };

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  //----------------------------------------------------
  // Prevent page scroll
  //----------------------------------------------------

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      clearTimers();
    };
  }, []);

  //----------------------------------------------------
  // Opening Animation
  //----------------------------------------------------

  const startOpening = () => {
    if (animating) return;

    setAnimating(true);

    //------------------------------------------------
    // Press Wax
    //------------------------------------------------

    setStage(STAGES.PRESS);

    //------------------------------------------------
    // Open Flap
    //------------------------------------------------

    addTimer(() => {
      setStage(STAGES.OPEN);
    }, 500);

    //------------------------------------------------
    // Raise Invitation
    //------------------------------------------------

    addTimer(() => {
      setStage(STAGES.CARD);
    }, 1500);

    //------------------------------------------------
    // Expand Invitation
    //------------------------------------------------

    addTimer(() => {
      setStage(STAGES.EXPAND);
    }, 2800);

    //------------------------------------------------
    // Enter Website
    //------------------------------------------------

    addTimer(() => {
      onOpen();
    }, 3900);
  };

  //----------------------------------------------------
  // Render
  //----------------------------------------------------

  return (
    <section className="opening-screen">

      <Background />

      <Envelope
        stage={stage}
        onSealClick={startOpening}
      />

    </section>
  );
}