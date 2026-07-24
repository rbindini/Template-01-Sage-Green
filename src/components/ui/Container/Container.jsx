import styles from "./Container.module.css";

const Container = ({
  children,
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component className={`${styles.container} ${className}`}>
      {children}
    </Component>
  );
};

export default Container;