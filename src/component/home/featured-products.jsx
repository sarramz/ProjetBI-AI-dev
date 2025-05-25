import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useSearch } from "../../context/searchContext";  // <-- ajout

const API_BASE_URL = "http://localhost:8000/products";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { searchTerm } = useSearch();  // <-- ajout

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}?limit=8&sort=asc`)
      .then((res) => setProducts(res.data))
      .catch(() => setError("Impossible de charger les produits."));
  }, []);

  // Filtrage des produits selon la recherche
  const filteredProducts = products.filter((phone) =>
    phone.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Phones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the latest and greatest smartphones
          </p>
        </div>
        {error && <p className="text-red-600 text-center mb-6">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((phone) => (
            <ProductCard key={phone.id || phone._id} phone={phone} />
          ))}
        </div>
      </div>
    </section>
  );
}
