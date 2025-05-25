import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/authContext";

const API_BASE_URL = "http://localhost:8000/products";

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

  // Charger les produits
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
      setError(
        err.response?.data?.detail || "Erreur lors du chargement des produits"
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  // Gérer l’upload de fichier image + aperçu
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((f) => ({
        ...f,
        imageFile: file,
      }));

      // Créer un aperçu local
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((f) => ({
          ...f,
          imageUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Soumettre formulaire ajout ou édition
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price) {
      alert("Le titre et le prix sont obligatoires");
      return;
    }

    setLoading(true);

    try {
      let payload;
      let headers = { Authorization: `Bearer ${token}` };

      if (formData.imageFile) {
        // Si upload d'image avec FormData
        payload = new FormData();
        payload.append("title", formData.title);
        payload.append("price", parseFloat(formData.price));
        payload.append("description", formData.description);
        payload.append("category", formData.category);
        payload.append("stock", parseInt(formData.stock) || 0);
        payload.append("image", formData.imageFile);
        headers["Content-Type"] = "multipart/form-data";
      } else {
        // Sinon données JSON
        payload = {
          title: formData.title,
          price: parseFloat(formData.price),
          description: formData.description,
          image: formData.imageUrl,  // Url ou base64
          category: formData.category,
          stock: parseInt(formData.stock) || 0,
        };
      }

      if (isEditing) {
        await axios.put(
          `${API_BASE_URL}/${formData.id}`,
          payload,
          { headers }
        );
        toast.success("Produit mis à jour !");
      } else {
        await axios.post(API_BASE_URL, payload, { headers });
        toast.success("Produit ajouté !");
      }

      // Reset formulaire et rafraîchir liste
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

  // Préparer formulaire édition
  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      imageFile: null,
      imageUrl: product.image,
      category: product.category,
      stock: product.stock,
    });
    setIsEditing(true);
  };

  // Supprimer produit
  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Produit supprimé !");
      fetchProducts();
    } catch (err) {
      toast.error(err.response?.data?.detail || "Erreur lors de la suppression");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Gestion des produits</h1>

      <section className="mb-8 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          {isEditing ? "Modifier Produit" : "Ajouter Produit"}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Prix"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded md:col-span-2"
          />
          <div>
            <label className="block mb-1 font-semibold">Image produit</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded w-full"
            />
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Preview"
                className="mt-2 max-h-40 rounded shadow"
              />
            )}
          </div>
          <input
            type="text"
            name="category"
            placeholder="Catégorie"
            value={formData.category}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition disabled:opacity-50"
          >
            {loading ? (isEditing ? "Mise à jour..." : "Ajout...") : isEditing ? "Modifier" : "Ajouter"}
          </button>
        </form>
      </section>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Liste des produits</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {products.length === 0 ? (
          <p>Aucun produit disponible.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="p-2">Titre</th>
                  <th className="p-2">Prix</th>
                  <th className="p-2">Catégorie</th>
                  <th className="p-2">Stock</th>
                  <th className="p-2">Image</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-2">{p.title}</td>
                    <td className="p-2">${p.price.toFixed(2)}</td>
                    <td className="p-2">{p.category}</td>
                    <td className="p-2">{p.stock}</td>
                    <td className="p-2">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="max-h-20 rounded object-contain"
                        />
                      ) : (
                        <span className="text-gray-400">Pas d'image</span>
                      )}
                    </td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleEdit(p)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
