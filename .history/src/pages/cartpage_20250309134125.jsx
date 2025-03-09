import React from "react";
import "./cartpage.css";

export default function CartPage() {
  return (
    <div className="cart-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <i className="icon-shop"></i> Shop
          </li>
          <li className="active">
            <i className="icon-cart"></i> My Cart
          </li>
          <li>
            <i className="icon-orders"></i> Orders
          </li>
          <li>
            <i className="icon-settings"></i> Settings
          </li>
        </ul>
        <div className="logout-section">
          <i className="icon-logout"></i> Log out
        </div>
      </aside>

      {/* Main Content */}
      <main className="cart-main">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          <div className="cart-item">
            <img src="https://via.placeholder.com/80" alt="Product" className="product-image" />
            <div className="product-details">
              <h3>Product Name</h3>
              <p>$50.00</p>
              <div className="quantity-control">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <button className="remove-item">Remove</button>
          </div>
        </div>
        <div className="cart-summary">
          <h3>Total: $50.00</h3>
          <button className="btn-checkout">Proceed to Checkout</button>
        </div>
      </main>
    </div>
  );
}
