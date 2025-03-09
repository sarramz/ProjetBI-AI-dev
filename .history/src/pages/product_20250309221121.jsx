import React, { useState } from "react";
import "./productpage.css";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState("/images/shirt1.png");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="product-container">
      {/* Section principale du produit */}
      <div className="product-card">
        {/* Images du produit */}
        <div className="product-images">
          <img src={selectedImage} alt="Main Product" className="main-image" />
          <div className="thumbnail-container">
            {["/images/shirt1.png", "/images/shirt2.png"].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === image ? "active" : ""}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Détails du produit */}
        <div className="product-details">
          <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
          <p className="price">
            $260 <span className="old-price">$300</span>
          </p>

          {/* Sélection de couleur */}
          <p>Select Color:</p>
          <div className="colors">
            {["green", "black", "blue"].map((color) => (
              <div key={color} className={`color ${color}`}></div>
            ))}
          </div>

          {/* Sélection de taille */}
          <p>Select Size:</p>
          <div className="sizes">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Bouton ajouter au panier */}
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      {/* Produits similaires */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="products-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product">
              <span className="hot">HOT</span>
              <img src="/images/shoes.png" alt="Nike Air Max 270" />
              <h3>Nike Air Max 270 React</h3>
              <p>
                $299.43 <span className="old-price">$342.81</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
