import React from "react";
import "./style.css"; // Assure-toi que ce fichier existe
import image404 from "/image.png"; // Image située dans `public/`

export default function NotFoundPage() {
  return (
    <div className="container">
      <h2>Page Not Found</h2>
      <div className="image-container">
        <img src={image404} alt="404 Illustration" />
      </div>
      <a href="/" className="back-button">BACK TO HOME</a>
    </div>
  );
}
