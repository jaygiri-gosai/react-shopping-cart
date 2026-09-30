import styles from "./Approach.module.css";
import Button from "../Button/Button";
import stack from "../../assets/stack.png";

function Approach() {
  return (
    <section className={styles.approachContainer}>
      <div className={styles.approachSectionLeft}>
        <img src={stack} width="240" alt="Stack Image" />
      </div>
      <div className={styles.approachSectionRight}>
        <span>Our Approach</span>
        <h1>Fewer things, made better.</h1>
        <p>
          We design a small number of pieces each season and hold each one to a
          higher standard — better materials, better construction, built to
          outlast the trend cycle.
        </p>
        <Button title="Shop Now" btnType="primary" />
      </div>
    </section>
  );
}
export default Approach;
