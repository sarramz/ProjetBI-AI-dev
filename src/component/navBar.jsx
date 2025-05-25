import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/authContext";
import { useCart } from "../context/cartContext";
import { useSearch } from "../context/searchContext"; // ✅ Ajout ici

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/products" },
  { title: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();
  const { cartItemsCount } = useCart();
const { setSearchTerm } = useSearch();


const handleSearch = (e) => {
  e.preventDefault();
  setSearchTerm(searchQuery.trim());
  
};


  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition"
        >
          SBER SHOPS
        </Link>
      </div>

      {/* Center: Navigation */}
      <div className="flex-1 flex justify-center gap-8">
        {navLinks.map(({ title, path }) => (
          <Link
            key={title}
            to={path}
            className={`relative text-gray-700 hover:text-black font-medium transition ${
              location.pathname === path
                ? "text-black font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-black"
                : ""
            }`}
          >
            {title}
          </Link>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="relative w-64 max-w-xs"
          role="search"
          aria-label="Search bar"
        >
          <input
            type="search"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Submit search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative text-gray-700 hover:text-black"
          aria-label="Shopping cart"
        >
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
              {cartItemsCount}
            </span>
          )}
        </Link>

        {/* Admin dashboard */}
        {user?.role === "admin" && (
          <Link
            to="/admin"
            className="text-gray-700 hover:text-teal-600"
            title="Admin Dashboard"
          >
            <FontAwesomeIcon icon={faUserCog} size="lg" />
          </Link>
        )}

        {/* Auth actions */}
        {user ? (
          <>
            <button
              onClick={logout}
              className="text-gray-700 hover:text-red-600 transition"
            >
              Logout
            </button>
            <span className="text-sm text-gray-600 font-medium">
              Bonjour, {user.name}
            </span>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 hover:text-teal-600 transition"
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
