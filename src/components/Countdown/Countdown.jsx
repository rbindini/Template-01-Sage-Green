import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

import background from "../../assets/backgrounds/countdown-bg.webp";
import paperTexture from "../../assets/backgrounds/paper-texture.webp";

import topLeft from "../../assets/backgrounds/floral-corner-top-left.webp";
import bottomRight from "../../assets/backgrounds/floral-corner-bottom-right.webp";

import goldDivider from "../../assets/backgrounds/gold-divider.svg";

export default function Countdown() {

  // ================================
  // CHANGE THIS DATE
  // ================================

  const weddingDate = new Date("2026-12-12T09:00:00");

  const calculateTimeLeft = () => {

    const difference = weddingDate - new Date();

    if (difference <= 0) {

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {

      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(calculateTimeLeft());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section
      className={styles.countdown}
      style={{
        backgroundImage: `
        linear-gradient(rgba(248,245,240,.92),rgba(248,245,240,.92)),
        url(${background})
      `,
      }}
    >

      <div
        className={styles.paper}
        style={{
          backgroundImage: `url(${paperTexture})`,
        }}
      />

      <img
        src={topLeft}
        alt=""
        className={styles.topLeft}
      />

      <img
        src={bottomRight}
        alt=""
        className={styles.bottomRight}
      />

      <div className={styles.container}>

        <p className={styles.subtitle}>
          THE COUNTDOWN BEGINS
        </p>

        <h2 className={styles.title}>
          Until We Say "I Do"
        </h2>

        <img
          src={goldDivider}
          alt=""
          className={styles.divider}
        />

        <div className={styles.timer}>

          <div className={styles.box}>
            <h3>{timeLeft.days}</h3>
            <span>DAYS</span>
          </div>

          <div className={styles.box}>
            <h3>{timeLeft.hours}</h3>
            <span>HOURS</span>
          </div>

          <div className={styles.box}>
            <h3>{timeLeft.minutes}</h3>
            <span>MINUTES</span>
          </div>

          <div className={styles.box}>
            <h3>{timeLeft.seconds}</h3>
            <span>SECONDS</span>
          </div>

        </div>

      </div>

    </section>

  );

}