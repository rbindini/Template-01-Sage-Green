import styles from "./Hero.module.css";

import background from "../../assets/Hero/background.webp";
import paperTexture from "../../assets/Hero/paper-texture.webp";

export default function BackgroundLayers() {
  return (
    <>
      {/* Background Image */}
      <div className={styles.background}>
        <img
          src={background}
          alt="Wedding venue background"
          loading="eager"
        />
      </div>

      {/* Paper Texture */}
      <div
        className={styles.paperTexture}
        style={{
          backgroundImage: `url(${paperTexture})`,
        }}
      />

      {/* Soft Ivory Overlay */}
      <div className={styles.overlay} />
    </>
  );
}