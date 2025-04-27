import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Import Link & useLocation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Navigation links data
const navLinks = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/products" },
  { title: "Contact", path: "/contact" },
  { title: "login", path: "/login" },
  { title: "Sign Up", path: "/signup" },

];

function Navbar() {
  const location = useLocation(); // ✅ Get current route
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold">SBER SHOPS</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex-2 flex justify-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            to={link.path}
            className={`relative text-gray-700 hover:text-black transition-colors duration-200 ${
              location.pathname === link.path
                ? 'text-black font-medium after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-black'
                : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex-1 flex justify-end relative">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 px-4 py-2 pr-10 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors duration-200"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
