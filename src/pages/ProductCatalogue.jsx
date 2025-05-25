import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../component/home/ProductCard";

const API_BASE_URL = "http://localhost:8000/products";

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 12; 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}?limit=${limit}`);
        setProducts(response.data);
      } catch (err) {
        setError("Erreur lors du chargement des produits.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Catalogue de Produits</h1>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading && !error && products.length === 0 && <p>Aucun produit trouvé.</p>}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image || "/placeholder.png"}
            title={product.title}
            price={product.price}
            discount="10%"
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-teal-600 text-white rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <span className="flex items-center px-4">{page}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 bg-teal-600 text-white rounded"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default ProductCatalogue;
