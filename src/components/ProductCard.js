import React from "react";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    maxHeight: "150px",
    objectFit: "contain",
    marginBottom: "12px",
  },
  title: {
    fontSize: "14px",
    marginBottom: "8px",
  },
  price: {
    fontWeight: "bold",
    marginBottom: "12px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductCard;
