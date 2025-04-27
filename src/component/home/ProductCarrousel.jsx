"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import ProductCard from "./ProductCard"

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      image: "/path-to-product-1.jpg",
      title: "Interruptor Inteligente Sonoff 4CH R2",
      price: 67.5,
      discount: "50%",
    },
    {
      id: 2,
      image: "/path-to-product-2.jpg",
      title: "Interruptor Sonoff T3 EU 3C",
      price: 89.9,
      discount: "50%",
    },
    {
      id: 3,
      image: "/path-to-product-3.jpg",
      title: "Sonoff S26 Tomada Smart",
      price: 89.9,
      discount: "50%",
    },
    {
      id: 4,
      image: "/path-to-product-4.jpg",
      title: "Interruptor Sonoff Mini R2",
      price: 119.9,
      discount: "50%",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 >= products.length ? 0 : prevIndex + 4))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 < 0 ? products.length - 4 : prevIndex - 4))
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Our most sold products</h2>

        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-6">
            {products.slice(currentIndex, currentIndex + 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel

