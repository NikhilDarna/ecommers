import React from "react";
import ProductCard from "./ProductCard";
import useFetchProducts from "../hooks/useFetchProducts";

const FeaturedProducts = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="featured-products">
      <h2>Our Products</h2>
    </section>
  );
};

export default FeaturedProducts;
