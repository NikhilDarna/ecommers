import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductListing from "./components/ProductListing";
import CartPage from "./components/CartPage";
import MiniCart from "./components/MiniCart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import "./styles/main.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <MiniCart />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <FeaturedProducts />
                  <ProductListing />
                </>
              }
            />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
