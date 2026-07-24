import styles from "./Blessings.module.css";

import background from "../../assets/backgrounds/blessings-bg.webp";
import paperTexture from "../../assets/backgrounds/paper-texture.webp";
import floralTopLeft from "../../assets/backgrounds/floral-corner-top-left.webp";
import floralBottomRight from "../../assets/backgrounds/floral-corner-bottom-right.webp";
import lotusDivider from "../../assets/backgrounds/lotus-divider.svg";

export default function Blessings() {
  return (
    <section
      className={styles.blessings}
      style={{
        backgroundImage: `
          linear-gradient(rgba(248,245,240,.92), rgba(248,245,240,.92)),
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
        src={floralTopLeft}
        alt=""
        className={styles.topLeft}
      />

      <img
        src={floralBottomRight}
        alt=""
        className={styles.bottomRight}
      />

      <div className={styles.container}>

        <p className={styles.smallTitle}>
          WITH THE BLESSINGS OF
        </p>

        <img
          src={lotusDivider}
          alt=""
          className={styles.divider}
        />

        <h2 className={styles.title}>
          Our Families
        </h2>

        <p className={styles.text}>
          Together with the blessings of our beloved
          parents, grandparents and family, we joyfully
          invite you to celebrate the beginning of our
          forever.

          <br /><br />

          Your love, blessings and gracious presence
          will make this celebration complete and
          create memories that we shall cherish for
          a lifetime.
        </p>

        <div className={styles.familyGrid}>

          <div className={styles.familyCard}>
            <h3>Bride's Family</h3>

            <p>
              Mr. Rajendran
            </p>

            <p>
              Mrs. Lakshmi Rajendran
            </p>

            <span>
              Request the honour of your presence
            </span>
          </div>

          <div className={styles.familyCard}>
            <h3>Groom's Family</h3>

            <p>
              Mr. Gopalakrishnan
            </p>

            <p>
              Mrs. Meenakshi Gopal
            </p>

            <span>
              Welcome you with love and blessings
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}