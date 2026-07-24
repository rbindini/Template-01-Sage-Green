import styles from "./SectionHeading.module.css";

const SectionHeading = ({
  label,
  title,
  subtitle,
  align = "center",
  decorative = true,
  className = "",
}) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[align]} ${className}`}
    >
      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}

      {title && (
        <h2 className={styles.title}>
          {title}
        </h2>
      )}

      {decorative && (
        <div className={styles.ornament}>
          <span></span>
          <i>❦</i>
          <span></span>
        </div>
      )}

      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;