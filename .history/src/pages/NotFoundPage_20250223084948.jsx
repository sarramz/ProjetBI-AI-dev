import React from "react";
import "./style.css";
import image from "./image.png"; // Mets ton image ici

export default function NotFoundPage() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h1>Exclusive</h1>
        <div className="nav-links">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="What are you looking for?" />
          <span className="icon">🛒</span>
          <span className="icon">👤</span>
        </div>
      </nav>

      {/* Page 404 */}
      <div className="container">
        <h2>Page Not Found</h2>
        <div className="image-container">
          <img src={image404} alt="404 Illustration" />
        </div>
        <a href="/" className="back-button">BACK TO HOME</a>
      </div>
    </div>
  );
}
