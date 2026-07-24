import styles from "./Invitation.module.css";

import background from "../../assets/backgrounds/invitation-bg.webp";
import paperTexture from "../../assets/backgrounds/paper-texture.webp";

import topRight from "../../assets/backgrounds/floral-corner-top-right.webp";
import bottomLeft from "../../assets/backgrounds/floral-corner-bottom-left.webp";

import goldDivider from "../../assets/backgrounds/gold-divider.svg";

export default function Invitation() {
  return (
    <section
      className={styles.invitation}
      style={{
        backgroundImage: `
          linear-gradient(rgba(250,248,242,.94), rgba(250,248,242,.94)),
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
        src={topRight}
        alt=""
        className={styles.topRight}
      />

      <img
        src={bottomLeft}
        alt=""
        className={styles.bottomLeft}
      />

      <div className={styles.container}>

        <p className={styles.subtitle}>
          WE REQUEST THE HONOUR OF YOUR PRESENCE
        </p>

        <img
          src={goldDivider}
          alt=""
          className={styles.divider}
        />

        <h2 className={styles.title}>
          Wedding Invitation
        </h2>

        <p className={styles.description}>
          It is with immense joy and gratitude that we invite you
          to witness and celebrate one of the most meaningful days
          of our lives as we begin our journey together in love,
          laughter and lifelong companionship.
        </p>

        <div className={styles.card}>

          <p className={styles.inviteHeading}>
            Together with our families
          </p>

          <h3>
            Rahul
            <span>&</span>
            Priya
          </h3>

          <p className={styles.date}>
            Sunday
            <br />
            24 December 2027
          </p>

          <p className={styles.location}>
            Royal Heritage Palace
            <br />
            Jaipur, Rajasthan
          </p>

        </div>

      </div>

    </section>
  );
}