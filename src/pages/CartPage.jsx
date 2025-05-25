import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotalPrice,
  } = useCart();

  const [showModal, setShowModal] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Votre panier est vide</h2>
        <Link
          to="/products"
          className="px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Continuer vos achats
        </Link>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }

  // Génère une facture PDF et lance téléchargement
  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Facture SBER SHOPS", 14, 20);
    doc.setFontSize(12);

    let y = 40;
    cartItems.forEach(({ product, quantity }, idx) => {
      doc.text(
        `${idx + 1}. ${product.title} x${quantity} - $${(product.price * quantity).toFixed(2)}`,
        14,
        y
      );
      y += 10;
    });

    doc.text(`Total: $${cartTotalPrice.toFixed(2)}`, 14, y + 10);
    doc.save("facture-sber-shops.pdf");
    toast.success("Facture téléchargée !");
    setShowModal(false);
    clearCart();
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h2 className="text-3xl font-bold mb-6">Votre Panier</h2>

      <div className="space-y-6">
        {cartItems.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center gap-6 border-b pb-4">
            <img
              src={product.image || "/placeholder.png"}
              alt={product.title}
              className="w-24 h-24 object-contain rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-teal-600 font-bold">${product.price}</p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() =>
                    updateQuantity(product.id, quantity > 1 ? quantity - 1 : 1)
                  }
                  aria-label={`Diminuer quantité de ${product.title}`}
                >
                  -
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  aria-label={`Augmenter quantité de ${product.title}`}
                >
                  +
                </button>
              </div>
              <button
                className="mt-2 text-red-600 font-semibold hover:underline"
                onClick={() => removeFromCart(product.id)}
                aria-label={`Supprimer ${product.title} du panier`}
              >
                Supprimer
              </button>
            </div>
            <div className="font-bold text-lg">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <button
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
          onClick={clearCart}
        >
          Vider le panier
        </button>
        <div className="text-xl font-bold">Total: ${cartTotalPrice.toFixed(2)}</div>
      </div>

      <div className="mt-8 text-right">
        <button
          className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700"
          onClick={handleCheckout}
        >
          Passer à la caisse
        </button>
      </div>

      {/* Modal de confirmation facture */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">Télécharger votre facture ?</h3>
            <p className="mb-6">
              Voulez-vous télécharger une copie PDF de votre facture ?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Annuler
              </button>
              <button
                className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
                onClick={generateInvoice}
              >
                Télécharger
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CartPage;
