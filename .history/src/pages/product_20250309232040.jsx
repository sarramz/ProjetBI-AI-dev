import React from "react";
import "./p.css";

const ProductPage = () => {
  return (
    <div className="container">
      <div className="product">
        <div className="product-images">
          <img src="shirt-main.jpg" alt="T-shirt" className="main-image" />
          <div className="thumbnails">
            <img src="shirt-thumb1.jpg" alt="T-shirt thumbnail" />
            <img src="shirt-thumb2.jpg" alt="T-shirt thumbnail" />
            <img src="shirt-thumb3.jpg" alt="T-shirt thumbnail" />
          </div>
        </div>
        <div className="product-details">
          <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
          <p className="price">$260 <span className="old-price">$300</span></p>
          <p className="description">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="colors">
            <button className="color green"></button>
            <button className="color blue"></button>
            <button className="color black"></button>
          </div>
          <div className="sizes">
            <button className="size">S</button>
            <button className="size">M</button>
            <button className="size active">L</button>
            <button className="size">XL</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="products-list">
          <div className="product-card">
            <img src="shoe1.jpg" alt="Nike Air Max 270" />
            <p>Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card">
            <img src="shoe2.jpg" alt="Nike Air Max 270" />
            <p>Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card">
            <img src="shoe3.jpg" alt="Nike Air Max 270" />
            <p>Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;