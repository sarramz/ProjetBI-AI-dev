import React from "react";
import { useCart } from "../context/cartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotalPrice,
    cartItemsCount,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Votre panier est vide</h2>
        <p className="text-gray-600">Ajoutez des produits pour commencer votre achat.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h2 className="text-3xl font-bold mb-6">Votre panier ({cartItemsCount} articles)</h2>

      <div className="space-y-6">
        {cartItems.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-6 p-4 border rounded-lg shadow-sm"
          >
            <img
              src={product.image || "/placeholder.png"}
              alt={product.title}
              className="w-24 h-24 object-contain rounded"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-teal-600 font-bold">${product.price}</p>
              <p className="text-gray-600">Stock disponible: {product.stock}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                disabled={quantity <= 1}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                aria-label={`Diminuer quantité de ${product.title}`}
              >
                -
              </button>
              <span className="font-bold">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                disabled={quantity >= product.stock}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                aria-label={`Augmenter quantité de ${product.title}`}
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-red-600 hover:underline font-semibold"
              aria-label={`Supprimer ${product.title} du panier`}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <button
          onClick={clearCart}
          className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Vider le panier
        </button>

        <div className="text-xl font-bold">
          Total: ${cartTotalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
