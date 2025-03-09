import { useState } from "react";
import "./styles.css";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState("/images/shirt1.png");
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <div className="container">
      <div className="product-card">
        <div className="product-images">
          <img src={selectedImage} alt="Product" className="main-image" />
          <div className="thumbnail-container">
            <img
              src="/images/shirt1.png"
              alt="Thumbnail"
              className="thumbnail"
              onClick={() => setSelectedImage("/images/shirt1.png")}
            />
            <img
              src="/images/shirt2.png"
              alt="Thumbnail"
              className="thumbnail"
              onClick={() => setSelectedImage("/images/shirt2.png")}
            />
          </div>
        </div>
        <div className="product-details">
          <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
          <p className="price">
            $260 <span className="old-price">$300</span>
          </p>
          <p>Select Colors:</p>
          <div className="colors">
            <div className="color green"></div>
            <div className="color black"></div>
            <div className="color blue"></div>
          </div>
          <p>Select Size:</p>
          <div className="sizes">
            {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="products-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product">
              <span className="hot">HOT</span>
              <img src="/images/shoes.png" alt="Nike Air Max 270" />
              <h3>Nike Air Max 270 React</h3>
              <p>$299.43 <span className="old-price">$342.81</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
