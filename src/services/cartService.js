import axios from "axios";

const API_BASE_URL = "http://localhost:8000/carts";

// Récupération du token à chaque appel pour gérer les cas de refresh ou logout/login
const getConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

// Récupérer le panier de l’utilisateur connecté (retourne le premier panier reçu)
export const getCartAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`, getConfig());
    // TODO: adapter si backend gère plusieurs paniers / utilisateur
    return response.data[0] || null;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de la récupération du panier" };
  }
};

// Ajouter un produit dans le panier (patch add-product)
export const addProductAPI = async (cartId, productId, quantity) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/${cartId}/add-product`,
      { productId, quantity },
      getConfig()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de l'ajout du produit" };
  }
};

// Supprimer un produit du panier (patch remove-product)
export const removeProductAPI = async (cartId, productId) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/${cartId}/remove-product`,
      { product_id: productId },
      getConfig()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de la suppression du produit" };
  }
};

// Mettre à jour le panier complet (PUT)
export const updateCartAPI = async (cartId, products) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/${cartId}`,
      { products },
      getConfig()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de la mise à jour du panier" };
  }
};

// Vider le panier (DELETE /clear)
export const clearCartAPI = async (cartId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${cartId}/clear`, getConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "Erreur lors de la suppression du panier" };
  }
};
