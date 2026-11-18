import { createContext } from "react";
export const ShopContext = createContext({
  products: [],
  error: null,
  loading: true,
  cart: [],
  addToCart: () => {},
  updateQty: () => {},
  removeCartItem: () => {},
});
