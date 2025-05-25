import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/authContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const API_BASE_URL = "http://localhost:8000/products";
const API_UPLOAD_URL = "http://localhost:8000/products/upload-image";

const AdminDashboard = () => {
  const { token } = useAuth();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    price: "",
    description: "",
    imageFile: null,
    imageUrl: "",
    category: "",
    stock: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Charger produits
  const fetchProducts = async () => {
    if (!token) {
      setError("Token non disponible, veuillez vous reconnecter.");
      return;
    }
    setError(null);
    try {
      const res = await axios.get(API_BASE_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (err) {
      setError(err.response?.data?.detail || "Erreur lors du chargement des produits");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  // Changement formulaire (hors image)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(f => ({ ...f, [name]: value }));
  };

  // Upload image + récup URL backend
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    try {
      const form = new FormData();
      form.append("file", file);

      const res = await axios.post(API_UPLOAD_URL, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData(f => ({ ...f, imageUrl: res.data.url, imageFile: file }));
      toast.success("Image uploadée avec succès !");
    } catch {
      toast.error("Erreur lors de l'upload de l'image");
    } finally {
      setLoading(false);
    }
  };

  // Soumettre ajout / modification
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price) {
      toast.error("Le titre et le prix sont obligatoires");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        title: formData.title,
        price: parseFloat(formData.price),
        description: formData.description,
        image: formData.imageUrl,
        category: formData.category,
        stock: parseInt(formData.stock) || 0,
      };

      if (isEditing) {
        await axios.put(`${API_BASE_URL}/${formData.id}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Produit mis à jour !");
      } else {
        await axios.post(API_BASE_URL, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Produit ajouté !");
      }

      // Reset form et reload
      setFormData({
        id: null,
        title: "",
        price: "",
        description: "",
        imageFile: null,
        imageUrl: "",
        category: "",
        stock: "",
      });
      setIsEditing(false);
      fetchProducts();
    } catch (err) {
      toast.error(err.response?.data?.detail || "Erreur lors de la sauvegarde");
    } finally {
      setLoading(false);
    }
  };

  // Préparer édition produit
  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description || "",
      imageFile: null,
      imageUrl: product.image || "",
      category: product.category || "",
      stock: product.stock,
    });
    setIsEditing(true);
  };

  // Supprimer produit avec confirmation moderne
  const handleDelete = (product) => {
    confirmAlert({
      title: "Confirmer la suppression",
      message: `Voulez-vous vraiment supprimer le produit "${product.title}" ?`,
      buttons: [
        {
          label: "Oui",
          onClick: async () => {
            try {
              await axios.delete(`${API_BASE_URL}/${product.id}`, {
                headers: { Authorization: `Bearer ${token}` },
              });
              toast.success("Produit supprimé !");
              fetchProducts();
            } catch (err) {
              toast.error(err.response?.data?.detail || "Erreur lors de la suppression");
            }
          },
        },
        {
          label: "Non",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Admin Dashboard - Gestion des produits</h1>

      <section className="mb-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">{isEditing ? "Modifier Produit" : "Ajouter Produit"}</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={formData.title}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            disabled={loading}
          />
          <input
            type="number"
            name="price"
            placeholder="Prix"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            required
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            disabled={loading}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none md:col-span-2"
            disabled={loading}
          />
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Image produit</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 p-2 rounded-lg w-full"
              disabled={loading}
            />
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Preview"
                className="mt-3 max-h-48 rounded-lg shadow-md object-contain border border-gray-200"
              />
            )}
          </div>
          <input
            type="text"
            name="category"
            placeholder="Catégorie"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            disabled={loading}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-opacity disabled:opacity-50"
          >
            {loading ? (isEditing ? "Mise à jour..." : "Ajout...") : isEditing ? "Modifier" : "Ajouter"}
          </button>
        </form>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Liste des produits</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {products.length === 0 ? (
          <p className="text-gray-600">Aucun produit disponible.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-teal-100 text-teal-900 font-semibold border-b border-gray-300">
                  <th className="p-3">Titre</th>
                  <th className="p-3">Prix</th>
                  <th className="p-3">Catégorie</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3">{p.title}</td>
                    <td className="p-3">${p.price.toFixed(2)}</td>
                    <td className="p-3">{p.category}</td>
                    <td className="p-3">{p.stock}</td>
                    <td className="p-3">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/default-placeholder.png";
                          }}
                          className="max-h-20 rounded-lg object-contain border border-gray-300"
                        />
                      ) : (
                        <span className="text-gray-400">Pas d'image</span>
                      )}
                    </td>
                    <td className="p-3 space-x-3">
                      <button
                        onClick={() => handleEdit(p)}
                        className="bg-blue-600 px-3 py-1 rounded-lg text-white hover:bg-blue-700 transition"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(p)}
                        className="bg-red-600 px-3 py-1 rounded-lg text-white hover:bg-red-700 transition"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminDashboard;
