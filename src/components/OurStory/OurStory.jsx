import { motion } from "framer-motion";
import styles from "./OurStory.module.css";

export default function OurStory() {
  return (
    <section className={styles.story}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className={styles.subtitle}>OUR STORY</p>

        <h2 className={styles.heading}>
          Every love story is beautiful,
          <br />
          but ours is our favourite.
        </h2>

        <div className={styles.divider}></div>

        <p className={styles.text}>
          Two hearts, two families, one beautiful journey.
          What started with a simple conversation has grown
          into a lifetime of love, laughter and countless memories.
        </p>

        <p className={styles.quote}>
          "Together is our favourite place to be."
        </p>
      </motion.div>
    </section>
  );
}