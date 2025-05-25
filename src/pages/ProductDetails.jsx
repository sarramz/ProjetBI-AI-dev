import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API_BASE_URL}/${id}`);
        setProduct(res.data);
      } catch {
        setError("Produit introuvable ou erreur réseau");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p>Chargement du produit...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Ajouté ${quantity} x "${product.title}" au panier`);
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl flex flex-wrap gap-10">
      <div className="flex-1 min-w-[300px]">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.title}
          className="w-full rounded-lg object-contain"
        />
      </div>

      <div className="flex-1 min-w-[300px]">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-xl font-semibold text-teal-600 mt-4">${product.price}</p>
        <p
          className={`mt-1 font-semibold ${
            product.stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.stock > 0
            ? `En stock (${product.stock} disponibles)`
            : "Rupture de stock"}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}
            aria-label="Diminuer la quantité"
          >
            -
          </button>
          <span className="text-xl font-bold">{quantity}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setQuantity(q => (q < product.stock ? q + 1 : q))}
            aria-label="Augmenter la quantité"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>

        <button
          disabled={product.stock === 0}
          onClick={handleAddToCart}
          className={`mt-6 px-6 py-3 rounded text-white font-semibold transition ${
            product.stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700"
          }`}
          aria-disabled={product.stock === 0}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
