import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from './pages/ContactForm';
import MainLayout from './layouts/mainLayout';
import Home from './pages/home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import ProductCatalogue from './pages/ProductCatalogue';  // Attention à la casse et au nom correct
import Product from './pages/product';                  // Même chose ici
import NotFoundPage from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';

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
          <Route path="/product/:id" element={<Product />} /> {/* Route dynamique */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
