import { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Blue");

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => quantity > 1 && setQuantity((prev) => prev - 1);

  return (
    <div className="w-4/5 mx-auto font-sans">
      <div className="flex gap-10 mt-5 items-start">
        {/* Images */}
        <div className="flex-1">
          <img
            src="https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-256GB-Deep-Purple-MQ8W3LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg"
            alt="iPhone 14"
            className="w-full rounded-lg shadow-md hover:scale-105 transition"
          />
          <div className="flex gap-2 mt-3">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                src="https://www.apple.com/v/iphone-14/d/images/overview/design/iphone_14_blue__dzhvkd8j3giq_large.jpg"
                alt="iPhone 14 thumbnail"
                className="w-16 cursor-pointer rounded-md hover:scale-110 transition opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Apple iPhone 14</h1>
          <div className="text-yellow-400 text-lg mt-2">
            ⭐⭐⭐⭐⭐ <span className="text-gray-600">4.8 (2,341)</span>
          </div>
          <p className="text-green-600 text-xl font-bold mt-2">
            $799 <span className="line-through text-red-500 text-lg ml-2">$899</span>
          </p>
          <p className="mt-2 text-gray-700">
            The latest iPhone 14 with A15 Bionic chip, stunning camera, and incredible battery life.
          </p>

          {/* Color Selection */}
          <div className="mt-4">
            <span>Select Color:</span>
            <div className="flex gap-3 mt-2">
              {["Blue", "Purple", "Midnight", "Starlight"].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 hover:scale-110 transition ${
                    selectedColor === color ? "border-black" : ""
                  }`}
                  style={{
                    background:
                      color === "Blue"
                        ? "#5DADE2"
                        : color === "Purple"
                        ? "#8E44AD"
                        : color === "Midnight"
                        ? "#2C3E50"
                        : "#F8F9F9",
                  }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="flex items-center gap-4 mt-4">
            <button className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200" onClick={handleDecrease}>
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200" onClick={handleIncrease}>
              +
            </button>
          </div>

          <button className="mt-5 bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-5 border-b-2 border-gray-200 mt-8 pb-2">
        {["Product Details", "Rating & Reviews", "FAQs"].map((tab, index) => (
          <span
            key={index}
            className="text-lg font-bold cursor-pointer px-3 py-2 transition hover:text-black border-b-2 border-transparent hover:border-black"
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Related Products</h2>
        <div className="flex gap-5 overflow-x-auto mt-4 pb-3">
          {[
            { name: "iPhone 14 Pro", price: "$999", image: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-256GB-Deep-Purple-MQ8W3LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg" },
            { name: "iPhone 14 Plus", price: "$899", image: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-256GB-Deep-Purple-MQ8W3LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg" },
            { name: "iPhone 13", price: "$699", image: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-256GB-Deep-Purple-MQ8W3LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg" },
            { name: "iPhone SE", price: "$429", image: "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-256GB-Deep-Purple-MQ8W3LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.jpeg" },
          ].map((product, index) => (
            <div
              key={index}
              className="relative text-center bg-white p-5 rounded-lg shadow-md hover:scale-105 transition"
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                NEW
              </span>
              <img src={product.image} alt={product.name} className="w-40 rounded-lg" />
              <p className="font-bold mt-3">{product.name}</p>
              <p className="text-green-600 font-bold mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
