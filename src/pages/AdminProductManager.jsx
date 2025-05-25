import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = "http://localhost:8000/products";

const AdminProductManager = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: "",
  });
  const [loading, setLoading] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // Charger tous les produits
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_BASE_URL);
      setProducts(res.data);
    } catch (error) {
      toast.error("Erreur lors du chargement des produits");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Gérer les champs du formulaire
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Ajouter ou modifier un produit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, price, stock } = form;

    if (!title || !price || !stock) {
      toast.error("Titre, prix et stock sont obligatoires.");
      return;
    }

    try {
      if (editingProductId) {
        // Modifier
        await axios.put(`${API_BASE_URL}/${editingProductId}`, form, config);
        toast.success("Produit modifié avec succès !");
      } else {
        // Créer
        await axios.post(API_BASE_URL, form, config);
        toast.success("Produit ajouté avec succès !");
      }
      setForm({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
        stock: "",
      });
      setEditingProductId(null);
      fetchProducts();
    } catch (error) {
      toast.error(error.response?.data?.detail || "Erreur lors de l'opération");
    }
  };

  // Charger un produit dans le formulaire pour modification
  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setForm({
      title: product.title,
      price: product.price,
      description: product.description || "",
      image: product.image || "",
      category: product.category || "",
      stock: product.stock,
    });
  };

  // Supprimer un produit
  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/${id}`, config);
      toast.success("Produit supprimé !");
      fetchProducts();
    } catch (error) {
      toast.error(error.response?.data?.detail || "Erreur lors de la suppression");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">
        {editingProductId ? "Modifier le produit" : "Ajouter un produit"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Titre"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          step="0.01"
          min="0"
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          min="0"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Catégorie"
          value={form.category}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="URL de l'image"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          rows="3"
        />

        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
        >
          {editingProductId ? "Mettre à jour" : "Ajouter"}
        </button>
        {editingProductId && (
          <button
            type="button"
            onClick={() => {
              setEditingProductId(null);
              setForm({
                title: "",
                price: "",
                description: "",
                image: "",
                category: "",
                stock: "",
              });
            }}
            className="ml-4 px-6 py-3 border border-gray-400 rounded hover:bg-gray-100 transition"
          >
            Annuler
          </button>
        )}
      </form>

      <h3 className="text-2xl font-bold mb-4">Liste des produits</h3>
      <div className="space-y-4">
        {products.length === 0 ? (
          <p>Aucun produit trouvé.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center p-4 border rounded shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image || "/placeholder.png"}
                  alt={product.title}
                  className="w-16 h-16 object-contain rounded"
                />
                <div>
                  <h4 className="font-semibold">{product.title}</h4>
                  <p className="text-teal-600 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminProductManager;
