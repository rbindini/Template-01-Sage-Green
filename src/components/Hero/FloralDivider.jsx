import styles from "./Hero.module.css";

export default function FloralDivider() {
  return (
    <div className={styles.divider}>
      <span className={styles.line}></span>

      <div className={styles.flower}>
        ❋
      </div>

      <span className={styles.line}></span>
    </div>
  );
}