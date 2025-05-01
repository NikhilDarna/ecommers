import React from "react";
import useCart from "../hooks/useCart"; // Ensure correct import

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div className="cart-page" style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items" style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  background: "#fff",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ marginBottom: "8px" }}>{item.title}</h4>
                  <p style={{ marginBottom: "8px" }}>Price: ${item.price}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={{ padding: "4px 10px" }}
                    >
                      −
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={{ padding: "4px 10px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginLeft: "auto",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "30px", fontSize: "18px", textAlign: "left" }}>
            <strong>Total: ${calculateTotal().toFixed(2)}</strong>
          </div>

          <div style={{ textAlign: "left", marginTop: "15px" }}>
            <button
              disabled={!cartItems.length}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
