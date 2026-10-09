import Button from "../Button/Button";
import styles from "./ProductCard.module.css";
function ProductCard({ product, addToCart }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={`Image of ${product.title}`}
        className={styles.productImage}
      />
      <p className={styles.productTitle}>{product.title}</p>
      <p className={styles.productPrice}>$ {product.price}</p>
      <Button
        title="Add to Cart"
        btnType="primary"
        fnCall={addToCart}
        fnCallData={product}
      />
    </div>
  );
}

export default ProductCard;
