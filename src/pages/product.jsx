import React, { useState } from "react";
import "./product.css";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="container">
      <div className="product">
        <div className="product-images">
          <img src="shoes.jpg" alt="T-shirt" className="main-image" />
          <div className="thumbnails">
            <img src="shoes.jpg" alt="T-shirt thumbnail" />
            <img src="shoes.jpg" alt="T-shirt thumbnail" />
            <img src="shoes.jpg" alt="T-shirt thumbnail" />
          </div>
        </div>
        <div className="product-details">
          <h1 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="rating">
            ⭐⭐⭐⭐☆ <span className="review-count">4.5 (431)</span>
          </div>
          <p className="price">
            $260 <span className="old-price">$300</span>
          </p>
          <p className="description">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className="color-selection">
            <span>Select Color:</span>
            <div className="colors">
              <button className="color green"></button>
              <button className="color blue"></button>
              <button className="color black"></button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="size-selection">
            <span>Select Size:</span>
            <div className="sizes">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className={`size ${selectedSize === size ? "active" : ""}`}
                  onClick={() => handleSizeSelection(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="quantity">
            <button className="decrease" onClick={handleDecrease}>-</button>
            <span className="count">{quantity}</span>
            <button className="increase" onClick={handleIncrease}>+</button>
          </div>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="product-tabs">
        <span className="tab active">Product Details</span>
        <span className="tab">Rating & Reviews</span>
        <span className="tab">FAQs</span>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="products-list">
          {[...Array(4)].map((_, index) => (
            <div className="product-card hot" key={index}>
              <span className="badge">HOT</span>
              <img src="shoes.jpg" alt="Nike Air Max 270" />
              <p className="product-name">Nike Air Max 270 React</p>
              <p className="price">$299.41</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
