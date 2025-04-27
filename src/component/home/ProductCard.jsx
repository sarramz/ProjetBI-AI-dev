const ProductCard = ({ image, title, price, discount }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Discount Badge */}
        <div className="bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded absolute">{discount} OFF</div>
  
        {/* Product Image */}
        <img src="/images/mini-pc-product.webp" alt={title} className="w-full h-48 object-contain mb-4" />
  
        {/* Product Info */}
        <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">{title}</h3>
  
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-navy-900">${price}</span>
          <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">See Details</button>
        </div>
      </div>
    )
  }
  
  export default ProductCard
  