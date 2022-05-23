import styles from "../UI/Button.module.css";
import React from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
