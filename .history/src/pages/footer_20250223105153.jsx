import React from "react";
import "./Footer.css"; // Ajout du style

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>LIFT</h2>
          <p>+1 (7635) 547-12-97</p>
          <p>support@lift.agency</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Product</a>
          <a href="#">Information</a>
          <a href="#">Company</a>
          <a href="#">Lift Media</a>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <input type="text" placeholder="Get product updates" />
          <button>→</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2020 Lift Media. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
