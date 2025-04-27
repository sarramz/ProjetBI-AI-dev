import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from './pages/ContactForm';
import MainLayout from './layouts/mainLayout';
import Home from './pages/home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import ProductCatalogue from './pages/catalgue';
import Product from './pages/product';
import NotFoundPage from './pages/NotFound';
function App() {
  return (
   

    <Router>
        <MainLayout>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/contact" element={<ContactForm />} />
                  <Route path="/products" element={<ProductCatalogue />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="*" element={<NotFoundPage />} />

              </Routes>
        </MainLayout>
    </Router>
      );
}

export default App;
