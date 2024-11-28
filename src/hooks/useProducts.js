import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await fetchProducts();
      console.log("Fetched Products Data:", products);
      return products;
    },
  });
};
