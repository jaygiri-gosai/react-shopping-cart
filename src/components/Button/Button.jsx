import styles from "./Button.module.css";

function Button({ title, btnType }) {
  return <button className={styles[`btn-${btnType}`]}>{title}</button>;
}

export default Button;
