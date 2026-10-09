import { Outlet } from "react-router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const productExists = cart.some((item) => item.id === product.id);
    if (productExists) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  useEffect(() => {
    async function getProducts() {
      try {
        let data = [];
        let url = "https://fakestoreapi.com/products";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        data = await response.json();
        setProducts(data);
        setError(null);
        setLoading(false);
      } catch (e) {
        console.error("Fetch operation failed:", e);
        setProducts([]);
        setError(e);
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <Nav cartItems={cart} />
      <Outlet context={{ products, error, loading, addToCart }} />
      <Footer />
    </>
  );
}

export default App;
