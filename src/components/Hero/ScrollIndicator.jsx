import styles from "./Hero.module.css";

export default function ScrollIndicator() {
  return (
    <div className={styles.scrollWrapper}>
      <span className={styles.scrollText}>
        Begin Our Journey
      </span>

      <div className={styles.mouse}>
        <span className={styles.wheel}></span>
      </div>

      <span className={styles.arrow}>↓</span>
    </div>
  );
}