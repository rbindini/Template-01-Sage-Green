import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconPosition = "right",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  const classes = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${disabled ? styles.disabled : ""}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;