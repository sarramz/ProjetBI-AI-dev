import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../component/home/ProductCard";
import { useCart } from "../context/cartContext";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useSearch } from "../context/searchContext"; 
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = "http://localhost:8000/products";

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useSearch(); 

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [location.search, setSearchTerm]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API_BASE_URL}?limit=20`);
        setProducts(res.data);
      } catch (err) {
        setError("Erreur lors du chargement des produits.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];

  const filteredProducts = products.filter(product => {
    return (
      (!searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!categoryFilter || product.category === categoryFilter)
    );
  });

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    toast.success(`"${product.title}" ajouté au panier.`);
  };

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Catalogue de Produits</h1>
      {/* Filtres */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-4">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/3 p-2 border border-gray-300 rounded"
          aria-label="Recherche produit"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full sm:w-1/4 p-2 border border-gray-300 rounded"
          aria-label="Filtrer par catégorie"
        >
          <option value="">Toutes catégories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 && <p>Aucun produit trouvé.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id || product._id}
            phone={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductCatalogue;
