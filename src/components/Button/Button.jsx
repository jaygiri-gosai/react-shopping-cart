import styles from "./Button.module.css";

function Button({ title, btnType, fnCall = "", fnCallData = "" }) {
  return fnCall && fnCallData ? (
    <button
      className={styles[`btn-${btnType}`]}
      onClick={() => fnCall(fnCallData)}
    >
      {title}
    </button>
  ) : (
    <button className={styles[`btn-${btnType}`]}>{title}</button>
  );
}

export default Button;
