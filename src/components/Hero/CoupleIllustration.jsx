import { motion } from "framer-motion";
import styles from "./Hero.module.css";

import weddingData from "../../data/weddingData";

export default function CoupleIllustration() {
  return (
    <motion.div
      className={styles.couple}
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        delay: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img
        src={weddingData.coupleImage}
        alt={`${weddingData.groom} and ${weddingData.bride}`}
        loading="eager"
        draggable={false}
      />
    </motion.div>
  );
}