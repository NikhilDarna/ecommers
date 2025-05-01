import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const MiniCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="mini-cart-container">
      <button className="mini-cart-toggle" onClick={toggleCart} style={{ marginLeft: "100px" }}>
        Cart ({cartItems.length})
      </button>

      <div className={`mini-cart-panel ${isOpen ? "open" : ""}`}>
        <div className="mini-cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={toggleCart}>X</button>
        </div>

        <div className="mini-cart-items" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", padding: "10px" }}>
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            cartItems.map((item) => (
              <div className="mini-cart-item" key={item.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", background: "#fff" }}>
                <img src={item.image} alt={item.title} className="mini-cart-item-image" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
                <div className="mini-cart-item-details">
                  <h6>{item.title}</h6>
                  <p>Price: ${item.price}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button onClick={() => decreaseQuantity(item.id)} style={{ padding: "4px 8px" }}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} style={{ padding: "4px 8px" }}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-item" style={{ marginTop: "6px", backgroundColor: "#f44336", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px" }}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="mini-cart-footer" style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
            <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
            <button className="view-cart">View Cart</button>
            <button className="checkout" disabled={cartItems.length === 0}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
