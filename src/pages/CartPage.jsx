import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
        <Link
          to="/products"
          className="px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Continuer vos achats
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h2 className="text-3xl font-bold mb-6">Votre Panier</h2>

      <div className="space-y-4">
        {cartItems.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-6 border-b pb-4"
          >
            <img
              src={product.image || "/placeholder.png"}
              alt={product.title}
              className="w-24 h-24 object-contain rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-teal-600 font-bold">${product.price}</p>
              <p>Quantité:</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() =>
                    updateQuantity(product.id, quantity > 1 ? quantity - 1 : 1)
                  }
                >
                  -
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                >
                  +
                </button>
                <button
                  className="ml-6 text-red-600 font-semibold hover:underline"
                  onClick={() => removeFromCart(product.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
            <div className="font-bold text-lg">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <button
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
          onClick={clearCart}
        >
          Vider le panier
        </button>
        <div className="text-xl font-bold">Total: ${cartTotalPrice.toFixed(2)}</div>
      </div>

      <div className="mt-8 text-right">
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700">
          Passer à la caisse
        </button>
      </div>
    </div>
  );
};

export default CartPage;
