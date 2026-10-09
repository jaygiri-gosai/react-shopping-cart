import { Link } from "react-router";
import styles from "./Nav.module.css";
import cartIcon from "../../assets/cart.png";

function Nav({ cartItems }) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Link to="/">STUDIO</Link>
        </div>
        <nav className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="shop" className={styles.navLink}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="cart" className={styles.navLink}>
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.cartContainer}>
        <Link to="cart" className={styles.cartLink}>
          <img className={styles.cartImg} alt="Cart" src={cartIcon} />
          {console.log(cartItems)}
          {cartItems.length > 0 && (
            <span className={styles.cartCount}>{cartItems.length}</span>
          )}
        </Link>
      </div>
    </div>
  );
}
export default Nav;
