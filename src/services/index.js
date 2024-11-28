import axios from 'axios';
import api from './APIs'

const API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api`;



export const fetchProducts = async () => {
  try {
    const response = await axios.get(api.getProducts);
    console.log("API Response:", response.data); // Debug API response structure
    return response.data.response || []; // Adjust based on actual API response
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

