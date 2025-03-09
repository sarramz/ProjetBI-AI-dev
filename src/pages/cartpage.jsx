import React from "react";
import "./cartpage.css";

export default function CartPage() {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>

      {/* Tableau des articles */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-info">
              <img src="https://via.placeholder.com/50" alt="LCD Monitor" />
              LCD Monitor
            </td>
            <td>$650</td>
            <td>
              <select>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </td>
            <td>$650</td>
          </tr>
          <tr>
            <td className="product-info">
              <img src="https://via.placeholder.com/50" alt="Gamepad" />
              H1 Gamepad
            </td>
            <td>$550</td>
            <td>
              <select>
                <option>01</option>
                <option selected>02</option>
                <option>03</option>
              </select>
            </td>
            <td>$1100</td>
          </tr>
        </tbody>
      </table>

      {/* Boutons sous la table */}
      <div className="cart-buttons">
        <button className="return-shop">Return To Shop</button>
        <button className="update-cart">Update Cart</button>
      </div>

      {/* Coupon Section */}
      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button>Apply Coupon</button>
      </div>

      {/* Cart Total */}
      <div className="cart-total">
        <h3>Cart Total</h3>
        <p>Subtotal: <span>$1750</span></p>
        <p>Shipping: <span>Free</span></p>
        <hr />
        <p className="total">Total: <span>$1750</span></p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
