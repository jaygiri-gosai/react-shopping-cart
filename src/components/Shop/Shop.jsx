import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import ProductCard from "./ProductCard";

function Shop() {
  const { products, error, loading, addToCart } = useOutletContext();

  return (
    <section>
      <div className={styles.subHeading}>
        <h1>Shop All</h1>
      </div>
      <div className={styles.productContainer}>
        {loading && <h2>Loading......</h2>}
        {error && <h2>Unable to load products.</h2>}
        {!loading &&
          error === null &&
          products.map((item) => (
            <ProductCard key={item.id} product={item} addToCart={addToCart} />
          ))}
      </div>
    </section>
  );
}

export default Shop;
