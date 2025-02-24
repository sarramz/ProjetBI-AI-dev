import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Contact */}
        <div className="footer-section">
          <img src="/logo.png" alt="LIFT Logo" className="footer-logo" />
          <p>+1 (7635) 547-12-97</p>
          <p>support@lift.agency</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Information</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>&nbsp;</h4> {/* Alignement */}
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Lift Media</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer-section">
          <h4>Subscribe</h4>
          <div className="subscribe-box">
            <input type="email" placeholder="Get product updates" />
            <button>&rarr;</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>A product of <strong>LIFT</strong></p>
        <p>© 2020 Lift Media. All rights reserved</p>
      </div>
    </footer>
  );
}
