import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <span>{item.title}</span>
        <span>${item.price}</span>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
