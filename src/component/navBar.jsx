import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/authContext";
import { useCart } from "../context/cartContext";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/products" },
  { title: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();
  const { cartItemsCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold">
          <Link to="/" aria-label="Go to home page">SBER SHOPS</Link>
        </h1>
      </div>

      {/* Navigation links */}
      <div className="flex-2 flex justify-center gap-8">
        {navLinks.map(({ title, path }) => (
          <Link
            key={title}
            to={path}
            className={`relative text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200 ${
              location.pathname === path
                ? "text-black font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                : ""
            }`}
            aria-current={location.pathname === path ? "page" : undefined}
          >
            {title}
          </Link>
        ))}
      </div>

      {/* Search bar and user actions */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        <form onSubmit={handleSearch} className="relative" role="search" aria-label="Site search">
          <input
            type="search"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
            aria-label="Search products"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Submit search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {user ? (
          <>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label={`Cart with ${cartItemsCount} items`}
            >
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {user.role === "admin" && (
              <Link
                to="/admin"
                className="text-gray-700 hover:text-teal-600 ml-4"
                aria-label="Admin dashboard"
                title="Admin Dashboard"
              >
                <FontAwesomeIcon icon={faUserCog} size="lg" />
              </Link>
            )}

            <button
              onClick={logout}
              className="text-gray-700 hover:text-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              aria-label="Logout"
            >
              Logout
            </button>

            <span className="text-gray-700 font-medium" aria-live="polite" aria-atomic="true">
              Bonjour, {user.name}
            </span>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 hover:text-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
