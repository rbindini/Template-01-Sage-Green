import styles from "./PaperCard.module.css";

const PaperCard = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  padding = "lg",
}) => {
  return (
    <div
      className={`
        ${styles.card}
        ${styles[variant]}
        ${styles[padding]}
        ${hover ? styles.hover : ""}
        ${className}
      `}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default PaperCard;