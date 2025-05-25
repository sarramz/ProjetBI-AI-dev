import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getCartAPI,
  addProductAPI,
  removeProductAPI,
  updateCartAPI,
  clearCartAPI,
} from "../services/cartService"; // adapte le chemin selon ton projet

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null); // Le panier complet avec id, produits, etc.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupérer le panier au montage
  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const data = await getCartAPI();
        setCart(data);
      } catch (err) {
        setError(err.detail || "Erreur chargement panier");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Ajouter un produit au panier
  const addToCart = async (productId, quantity = 1) => {
    if (!cart) {
      setError("Panier non chargé");
      return;
    }
    setLoading(true);
    try {
      const updatedCart = await addProductAPI(cart.id, productId, quantity);
      setCart(updatedCart);
    } catch (err) {
      setError(err.detail || "Erreur ajout produit au panier");
    } finally {
      setLoading(false);
    }
  };

  // Supprimer un produit
  const removeFromCart = async (productId) => {
    if (!cart) {
      setError("Panier non chargé");
      return;
    }
    setLoading(true);
    try {
      const updatedCart = await removeProductAPI(cart.id, productId);
      setCart(updatedCart);
    } catch (err) {
      setError(err.detail || "Erreur suppression produit");
    } finally {
      setLoading(false);
    }
  };

  // Mettre à jour la quantité d’un produit
  const updateQuantity = async (productId, quantity) => {
    if (!cart) {
      setError("Panier non chargé");
      return;
    }
    if (quantity < 1) return; // Ignore quantité invalide
    setLoading(true);
    try {
      // On crée la liste mise à jour des produits côté front
      const updatedProducts = cart.products.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );
      const updatedCart = await updateCartAPI(cart.id, updatedProducts);
      setCart(updatedCart);
    } catch (err) {
      setError(err.detail || "Erreur mise à jour quantité");
    } finally {
      setLoading(false);
    }
  };

  // Vider le panier
  const clearCart = async () => {
    if (!cart) {
      setError("Panier non chargé");
      return;
    }
    setLoading(true);
    try {
      await clearCartAPI(cart.id);
      setCart({ ...cart, products: [], total_price: 0 });
    } catch (err) {
      setError(err.detail || "Erreur vidage panier");
    } finally {
      setLoading(false);
    }
  };

  // Calcul du nombre d’articles dans le panier
  const cartItemsCount = cart
    ? cart.products.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  // Calcul du total du panier
  const cartTotalPrice = cart ? cart.total_price : 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemsCount,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
