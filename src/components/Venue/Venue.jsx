import styles from "./Venue.module.css";

import background from "../../assets/backgrounds/venue-bg.webp";
import paperTexture from "../../assets/backgrounds/paper-texture.webp";

import topLeft from "../../assets/backgrounds/floral-corner-top-left.webp";
import bottomRight from "../../assets/backgrounds/floral-corner-bottom-right.webp";

import goldDivider from "../../assets/backgrounds/gold-divider.svg";

export default function Venue() {

  const venue = {
    name: "Royal Grand Palace",
    address1: "24 Cathedral Road",
    address2: "Chennai - 600086",

    note:
      "We warmly welcome you to celebrate our special day with your love and blessings.",

    mapLink:
      "https://maps.google.com",
  };

  return (

    <section
      className={styles.venue}
      style={{
        backgroundImage: `
        linear-gradient(rgba(248,245,240,.93),rgba(248,245,240,.93)),
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
          WEDDING VENUE
        </p>

        <h2 className={styles.title}>
          Join Us Here
        </h2>

        <img
          src={goldDivider}
          alt=""
          className={styles.divider}
        />

        <div className={styles.card}>

          <h3>{venue.name}</h3>

          <p className={styles.address}>
            {venue.address1}
            <br />
            {venue.address2}
          </p>

          <p className={styles.note}>
            {venue.note}
          </p>

          <a
            href={venue.mapLink}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            View on Google Maps
          </a>

        </div>

      </div>

    </section>

  );

}