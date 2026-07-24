import { useRef } from "react";
import styles from "./Gallery.module.css";

import background from "../../assets/backgrounds/gallery-bg.webp";
import paperTexture from "../../assets/backgrounds/paper-texture.webp";

import topLeft from "../../assets/backgrounds/floral-corner-top-left.webp";
import bottomRight from "../../assets/backgrounds/floral-corner-bottom-right.webp";

import goldDivider from "../../assets/backgrounds/gold-divider.svg";

// Couple Images

import image1 from "../../assets/couple/photo1.png";
import image2 from "../../assets/couple/photo2.png";
import image3 from "../../assets/couple/photo3.png";
import image4 from "../../assets/couple/photo4.png";
import image5 from "../../assets/couple/photo5.png";
import image6 from "../../assets/couple/photo6.png";

const gallery = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

export default function Gallery() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      `.${styles.card}`
    );

    if (!card) return;

    const gap = 28;

    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles.gallery}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(248,245,240,.92),
            rgba(248,245,240,.92)
          ),
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
          OUR MEMORIES
        </p>

        <h2 className={styles.title}>
          Gallery
        </h2>

        <img
          src={goldDivider}
          alt=""
          className={styles.divider}
        />

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={() => scroll("left")}
          >
            &#10094;
          </button>

          <div
            className={styles.slider}
            ref={sliderRef}
          >
            {gallery.map((image, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={() => scroll("right")}
          >
            &#10095;
          </button>
        </div>

        <p className={styles.swipeText}>
          Swipe or use the arrows to explore
          more memories
        </p>
      </div>
    </section>
  );
}