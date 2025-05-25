import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    axios
      .get("http://localhost:8000/products?limit=20")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? products.length - itemsPerPage : prev - itemsPerPage
    );
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.slice(currentIndex, currentIndex + itemsPerPage).map((p) => (
          <ProductCard
            key={p.id}
            image={p.image || "/placeholder.svg"}
            title={p.title}
            price={p.price}
            discount="50%"
          />
        ))}
      </div>

      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ProductCarousel;
