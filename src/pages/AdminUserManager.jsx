import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = "http://localhost:8000/users";

const AdminUserManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_BASE_URL, config);
      setUsers(res.data);
    } catch {
      toast.error("Erreur lors du chargement des utilisateurs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const toggleAdmin = async (user) => {
    try {
      const updatedUser = { ...user, is_admin: !user.is_admin };
      await axios.put(`${API_BASE_URL}/${user.id}`, updatedUser, config);
      toast.success(`Rôle de ${user.name} mis à jour.`);
      fetchUsers();
    } catch {
      toast.error("Erreur lors de la mise à jour du rôle");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/${id}`, config);
      toast.success("Utilisateur supprimé.");
      fetchUsers();
    } catch {
      toast.error("Erreur lors de la suppression de l'utilisateur");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Gestion des utilisateurs</h2>
      {loading ? (
        <p>Chargement des utilisateurs...</p>
      ) : users.length === 0 ? (
        <p>Aucun utilisateur trouvé.</p>
      ) : (
        users.map(user => (
          <div key={user.id} className="flex justify-between items-center p-4 border rounded shadow-sm mb-4">
            <div>
              <h4 className="font-semibold">{user.name}</h4>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm mt-1">
                Rôle : <span className={user.is_admin ? "text-green-600" : "text-gray-600"}>
                  {user.is_admin ? "Admin" : "Client"}
                </span>
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => toggleAdmin(user)}
                className={`px-4 py-2 rounded text-white ${
                  user.is_admin ? "bg-yellow-600 hover:bg-yellow-700" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {user.is_admin ? "Retirer Admin" : "Rendre Admin"}
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminUserManager;
