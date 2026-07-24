import styles from "./Hero.module.css";

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <p className={styles.familyText}>
        Together with their beloved families
      </p>

      <h1 className={styles.names}>
        Sreehari
        <span>&</span>
        Anupriya
      </h1>

      <p className={styles.inviteText}>
        request the honour of your presence
        <br />
        at the celebration of their marriage
      </p>

      <div className={styles.dateBlock}>
        <span className={styles.day}>Sunday</span>

        <h2>12</h2>

        <span className={styles.month}>
          December
          <br />
          2026
        </span>
      </div>
    </div>
  );
}