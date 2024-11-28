export const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api`;

const AI_ENDPOINTS = {
  // Auth end points
  // login: `${BASE_URL}/auth/login`,
  // refreshToken: `${BASE_URL}/api/auth/getAccessToken`,
  // forgotPassword: `${BASE_URL}/auth/forgot-password`,
  // resetPassword: `${BASE_URL}/auth/reset-password`,
  // logout: `${BASE_URL}/auth/logout`,
  // changePassword: `${BASE_URL}/auth/change-password`,

  // User end points
  getProducts: `https://fakestoreapi.in/api/products`,
};

export default AI_ENDPOINTS;