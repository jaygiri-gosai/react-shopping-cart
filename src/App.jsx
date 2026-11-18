import { Outlet } from "react-router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";

import { ShopProvider } from "./context/ShopContext/ShopProvider";

function App() {
  return (
    <>
      <ShopProvider>
        <Nav />
        <Outlet />
        <Footer />
      </ShopProvider>
    </>
  );
}

export default App;
