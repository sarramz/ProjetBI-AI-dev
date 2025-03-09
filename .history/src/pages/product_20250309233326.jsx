import React from "react";
import "./product.css";

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
          <div className="color-selection">
            <span>Select Color:</span>
            <div className="colors">
              <button className="color green"></button>
              <button className="color blue"></button>
              <button className="color black"></button>
            </div>
          </div>
          <div className="size-selection">
            <span>Select Size:</span>
            <div className="sizes">
              <button className="size">Small</button>
              <button className="size">Medium</button>
              <button className="size active">Large</button>
              <button className="size">X-Large</button>
            </div>
          </div>
          <div className="quantity">
            <button className="decrease">-</button>
            <span className="count">1</span>
            <button className="increase">+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="product-tabs">
        <span className="tab active">Product Details</span>
        <span className="tab">Rating & Reviews</span>
        <span className="tab">FAQs</span>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="products-list">
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
import React from "react";
import "./ProductPage.css";

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
          <div className="color-selection">
            <span>Select Color:</span>
            <div className="colors">
              <button className="color green"></button>
              <button className="color blue"></button>
              <button className="color black"></button>
            </div>
          </div>
          <div className="size-selection">
            <span>Select Size:</span>
            <div className="sizes">
              <button className="size">Small</button>
              <button className="size">Medium</button>
              <button className="size active">Large</button>
              <button className="size">X-Large</button>
            </div>
          </div>
          <div className="quantity">
            <button className="decrease">-</button>
            <span className="count">1</span>
            <button className="increase">+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="product-tabs">
        <span className="tab active">Product Details</span>
        <span className="tab">Rating & Reviews</span>
        <span className="tab">FAQs</span>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="products-list">
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
          <div className="product-card hot">
            <span className="badge">HOT</span>
            <img src="shoes.jpg" alt="Nike Air Max 270" />
            <p className="product-name">Nike Air Max 270 React</p>
            <p className="price">$299.41</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
