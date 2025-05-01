import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
