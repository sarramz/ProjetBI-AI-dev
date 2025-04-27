"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faChevronDown,
  faFilter,
  faTimes,
  faEye,
} from "@fortawesome/free-solid-svg-icons"

const ProductCatalogue = () => {
  const [activeFilters, setActiveFilters] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [hoveredProduct, setHoveredProduct] = useState(null)

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 249.99,
      rating: 4.5,
      reviews: 128,
      image: "https://www.macworld.com/wp-content/uploads/2024/10/original-iphone-2007-1.jpg?quality=50&strip=all",
      category: "Audio",
      brand: "SoundMaster",
      colors: ["Black", "White", "Blue"],
      discount: 15,
      isNew: true,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Ultra HD Smart TV 55"',
      price: 699.99,
      rating: 4.7,
      reviews: 84,
      image: "https://www.macworld.com/wp-content/uploads/2024/10/original-iphone-2007-1.jpg?quality=50&strip=all",
      category: "TVs",
      brand: "VisionTech",
      colors: ["Black"],
      discount: 0,
      isNew: false,
      isFavorite: true,
    },
    {
      id: 3,
      name: "Professional DSLR Camera",
      price: 1299.99,
      rating: 4.9,
      reviews: 56,
      image: "https://www.macworld.com/wp-content/uploads/2024/10/original-iphone-2007-1.jpg?quality=50&strip=all",
      category: "Cameras",
      brand: "PhotoPro",
      colors: ["Black", "Silver"],
      discount: 10,
      isNew: true,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 349.99,
      rating: 4.3,
      reviews: 42,
      image: "https://www.macworld.com/wp-content/uploads/2024/10/original-iphone-2007-1.jpg?quality=50&strip=all",
      category: "Furniture",
      brand: "ComfortPlus",
      colors: ["Black", "Gray", "Blue"],
      discount: 0,
      isNew: false,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Smartphone XS Pro",
      price: 899.99,
      rating: 4.8,
      reviews: 215,
      image: "/placeholder.svg?height=300&width=300",
      category: "Phones",
      brand: "TechGiant",
      colors: ["Black", "Silver", "Gold"],
      discount: 5,
      isNew: true,
      isFavorite: true,
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      rating: 4.4,
      reviews: 98,
      image: "/placeholder.svg?height=300&width=300",
      category: "Audio",
      brand: "SoundMaster",
      colors: ["Red", "Black", "Blue"],
      discount: 0,
      isNew: false,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Gaming Laptop Pro",
      price: 1499.99,
      rating: 4.6,
      reviews: 73,
      image: "/placeholder.svg?height=300&width=300",
      category: "Computers",
      brand: "GameForce",
      colors: ["Black", "Red"],
      discount: 8,
      isNew: true,
      isFavorite: false,
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 49.99,
      rating: 4.2,
      reviews: 64,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      brand: "PowerUp",
      colors: ["Black", "White"],
      discount: 0,
      isNew: false,
      isFavorite: false,
    },
  ]

  const categories = [
    { name: "Audio", count: 24 },
    { name: "TVs", count: 18 },
    { name: "Cameras", count: 12 },
    { name: "Computers", count: 32 },
    { name: "Phones", count: 28 },
    { name: "Accessories", count: 45 },
    { name: "Furniture", count: 16 },
  ]

  const brands = [
    { name: "SoundMaster", count: 14 },
    { name: "VisionTech", count: 8 },
    { name: "PhotoPro", count: 6 },
    { name: "TechGiant", count: 22 },
    { name: "GameForce", count: 11 },
    { name: "PowerUp", count: 19 },
    { name: "ComfortPlus", count: 7 },
  ]

  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange]
    newRange[index] = Number.parseInt(e.target.value)
    setPriceRange(newRange)
  }

  const clearAllFilters = () => {
    setActiveFilters([])
    setPriceRange([0, 1000])
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className="text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} className="text-yellow-400" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-star-${i}`} icon={faStar} className="text-gray-300" />)
    }

    return stars
  }

  const toggleFavorite = (productId) => {
    // In a real app, this would update state or call an API
    console.log(`Toggle favorite for product ${productId}`)
  }

  const addToCart = (productId) => {
    // In a real app, this would update state or call an API
    console.log(`Add product ${productId} to cart`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
            <div className="relative w-full max-w-md mx-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faHeart} />
                <span className="sr-only">Favorites</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="sr-only">Cart</span>
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faFilter} />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar - Mobile Collapsible, Desktop Always Visible */}
          <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 lg:w-72 flex-shrink-0`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-800">Filters</h2>
                {activeFilters.length > 0 && (
                  <button onClick={clearAllFilters} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    Clear All
                  </button>
                )}
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter) => (
                      <span
                        key={filter}
                        className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {filter}
                        <button
                          onClick={() => toggleFilter(filter)}
                          className="ml-1.5 text-blue-700 hover:text-blue-900"
                        >
                          <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">${priceRange[0]}</span>
                    <span className="text-sm text-gray-600">${priceRange[1]}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="absolute top-0 w-full h-2 bg-transparent appearance-none pointer-events-none"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-1/2">
                      <label className="text-xs text-gray-500 mb-1 block">Min</label>
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="text-xs text-gray-500 mb-1 block">Max</label>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center">
                      <input
                        id={`category-${category.name}`}
                        type="checkbox"
                        checked={activeFilters.includes(category.name)}
                        onChange={() => toggleFilter(category.name)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`category-${category.name}`} className="ml-2 text-sm text-gray-700 flex-grow">
                        {category.name}
                      </label>
                      <span className="text-xs text-gray-500">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.name} className="flex items-center">
                      <input
                        id={`brand-${brand.name}`}
                        type="checkbox"
                        checked={activeFilters.includes(brand.name)}
                        onChange={() => toggleFilter(brand.name)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`brand-${brand.name}`} className="ml-2 text-sm text-gray-700 flex-grow">
                        {brand.name}
                      </label>
                      <span className="text-xs text-gray-500">{brand.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="in-stock"
                      type="checkbox"
                      checked={activeFilters.includes("In Stock")}
                      onChange={() => toggleFilter("In Stock")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="on-sale"
                      type="checkbox"
                      checked={activeFilters.includes("On Sale")}
                      onChange={() => toggleFilter("On Sale")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="on-sale" className="ml-2 text-sm text-gray-700">
                      On Sale
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Section */}
          <div className="flex-1">
            {/* Top Bar - Sort, View Toggle, Results Count */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-medium">{products.length}</span> results
                </p>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Sort Dropdown */}
                  <div className="relative w-full sm:w-auto">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none w-full bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest</option>
                      <option value="rating">Top Rated</option>
                    </select>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>

                  {/* View Toggle */}
                  <div className="hidden sm:flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`px-3 py-2 ${viewMode === "grid" ? "bg-blue-50 text-blue-600" : "bg-white text-gray-600"}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`px-3 py-2 ${viewMode === "list" ? "bg-blue-50 text-blue-600" : "bg-white text-gray-600"}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"} gap-6`}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${viewMode === "list" ? "flex" : ""}`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image */}
                  <div className={`relative ${viewMode === "list" ? "w-1/3" : "w-full"}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover object-center"
                    />

                    {/* Discount Badge */}
                    {product.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </div>
                    )}

                    {/* New Badge */}
                    {product.isNew && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </div>
                    )}

                    {/* Quick Actions - Visible on Hover */}
                    <div
                      className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${hoveredProduct === product.id ? "opacity-100" : "opacity-0"}`}
                    >
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <FontAwesomeIcon icon={faHeart} className={product.isFavorite ? "text-red-500" : ""} />
                      </button>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-4 ${viewMode === "list" ? "w-2/3" : ""}`}>
                    <div className="mb-1">
                      <span className="text-xs font-medium text-blue-600">{product.category}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">{renderStars(product.rating)}</div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {product.discount > 0 ? (
                          <>
                            <span className="text-lg font-bold text-gray-900">
                              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </span>
                            <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        )}
                      </div>

                      {viewMode === "list" && (
                        <button
                          onClick={() => addToCart(product.id)}
                          className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>

                    {viewMode === "list" && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">Available in: {product.colors.join(", ")}</p>
                        <p className="text-sm text-gray-600 mt-2">Brand: {product.brand}</p>
                      </div>
                    )}

                    {viewMode === "grid" && (
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-full mt-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 rounded-md bg-teal-600 text-sm font-medium text-white">1</button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <span className="px-3 py-2 text-gray-500">...</span>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  8
                </button>
                <button className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductCatalogue

