import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">E-Commerce</Link>
      </div>
      <nav>
        <ul className="header1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <MiniCart />
    </header>
  );
};

export default Header;
