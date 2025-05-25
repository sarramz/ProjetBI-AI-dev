import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const fetchProducts = async (limit = 10, sort = "asc") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products?limit=${limit}&sort=${sort}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de la récupération des produits" };
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de la récupération du produit" };
  }
};
