import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // timeout 5s, ajustable
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    // Erreur axios structurée, sinon message générique
    throw error.response?.data || { detail: "Erreur lors de la connexion" };
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de l'inscription" };
  }
};
