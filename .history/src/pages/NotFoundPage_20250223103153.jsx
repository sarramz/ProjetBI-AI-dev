import React from "react";
import "./style.css"; // Assure-toi que ce fichier existe
import image404 from "/image.png"; // L'image doit être dans `public/`

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="text-container">
        <h2>Page Not Found</h2>
        <a href="/" className="back-button">BACK TO HOME</a>
      </div>
      <div className="image-container">
        <img src={image404} alt="404 Illustration" />
      </div>
    </div>
  );
}
