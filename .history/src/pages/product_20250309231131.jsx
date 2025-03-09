import React, { useState } from "react";
import "./product.css";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState("https://placehold.co/300x300");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="product-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <i className="icon-info"></i> Product Details
          </li>
          <li>
            <i className="icon-orders"></i> Reviews
          </li>
          <li>
            <i className="icon-wishlist"></i> Wishlist
          </li>
          <li className="active">
            <i className="icon-settings"></i> Settings
          </li>
        </ul>
        <div className="logout-section">
          <i className="icon-logout"></i> Log out
        </div>
      </aside>

      {/* Main Content */}
      <main className="product-main">
        <div className="product-card">
          {/* Images du produit */}
          <div className="product-images">
            <img src={selectedImage} alt="Main Product" className="main-image" />
            <div className="thumbnail-container">
              {["https://placehold.co/100x100", "https://placehold.co/100x100?text=Alt"].map((image, index) => (
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
                <img src="https://placehold.co/150x150" alt="Nike Air Max 270" />
                <h3>Nike Air Max 270 React</h3>
                <p>
                  $299.43 <span className="old-price">$342.81</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
