import React from "react";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <AppRouter />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
