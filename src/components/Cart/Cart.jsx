import styles from "./Cart.module.css";
import Button from "../Button/Button";
import { useOutletContext } from "react-router";
function Cart() {
  const { addToCart, cart, updateQty, removeCartItem } = useOutletContext();
  const totalSum = cart
    .map((item) => item.price * item.qty)
    .reduce((accumulator, current) => accumulator + current, 0)
    .toFixed(2);

  return (
    <section>
      <div className={styles.subHeading}>
        <h1>Your Cart</h1>
      </div>
      {cart.length <= 0 && (
        <h2 className={styles.noCartMsg}>Your cart is empty!</h2>
      )}
      {cart.length > 0 && (
        <div className={styles.cartContainer}>
          <div className={styles.containerLeft}>
            {cart.map((item) => {
              return (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.cartItemImage}>
                    <img
                      src={item.image}
                      alt={`Image of ${item.title}`}
                      className={styles.itemImg}
                    />
                  </div>
                  <div className={styles.itemContainerLeft}>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemTitle}>{item.title}</div>
                      <div className={styles.itemPrice}>
                        ${item.price.toFixed(2)} each
                      </div>
                    </div>
                    <div className={styles.quantityContainer}>
                      <div className={styles.qualityBox}>
                        <button
                          className={styles.leftButton}
                          onClick={() => {
                            updateQty(item);
                          }}
                          disabled={item.qty > 1 ? false : true}
                        >
                          -
                        </button>

                        <span>{item.qty}</span>
                        <button
                          className={styles.rightButton}
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeCartItem(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className={styles.itemContainerRight}>
                    <div className={styles.itemTotal}>
                      ${(item.price * item.qty).toFixed(2)}
                    </div>
                    <div className={styles.itemQuantity}>
                      ${item.price.toFixed(2) + " x " + item.qty}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {cart.length > 0 && (
            <div className={styles.containerRight}>
              <h2>Order Summary</h2>
              <div className={styles.subTotal}>
                <span className={styles.spanLeft}>Subtotal</span>
                <span className={styles.spanRight}>${totalSum}</span>
              </div>
              <p className={styles.shipping}>
                Shipping and taxes are calculated at checkout.
              </p>
              <Button title="Checkout" btnType="checkout" />
              <Button title="Continue Shopping" btnType="secondary" />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Cart;
