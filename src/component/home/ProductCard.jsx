const ProductCard = ({ image, title, price, discount }) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      {discount && (
        <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded">
          {discount} OFF
        </div>
      )}

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4 rounded"
      />

      <h3 className="text-sm text-gray-800 mb-2 line-clamp-2">{title}</h3>

      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-teal-800">${price}</span>
        <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
          See Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
