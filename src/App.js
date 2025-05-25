import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from './pages/ContactForm';
import MainLayout from './layouts/mainLayout';
import Home from './pages/home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import ProductCatalogue from './pages/ProductCatalogue';  // Vérifie le nom du fichier
import ProductDetails from './pages/ProductDetails';    // Import du composant détail produit
import NotFoundPage from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/products" element={<ProductCatalogue />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Route dynamique pour détail */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Route pour le tableau de bord admin */} <Route path="/cart" element={<CartPage />} />       
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
