import React from "react";
import { useProducts } from "../../hooks/useProducts";

const ProductsList = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  if (!Array.isArray(data)) {
    return <p>No products found or invalid data format.</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data?.map((product) => (
          <li key={product.id || Math.random()}>
            <h3>{product.title || "Untitled Product"}</h3>
            <p>{product.description || "No description available."}</p>
            <p>Price: ${product.price || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
