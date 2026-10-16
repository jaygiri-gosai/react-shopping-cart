import { Link } from "react-router";
import styles from "./Hero.module.css";

import shopper from "../../assets/shopper.png";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroDescription}>
        <span>New Season</span>
        <h1>Simple, made beautiful.</h1>
        <p>
          Considered essentials, built to last well past the season they arrived
          in.
        </p>
        <Link to="shop" className={styles.primaryLink}>
          Shop Now
        </Link>
      </div>
      <div className={styles.heroImgContainer}>
        <img src={shopper} alt="Shopper Image" />
      </div>
    </section>
  );
}
export default Hero;
