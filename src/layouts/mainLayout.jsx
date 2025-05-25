import React from "react";
import Navbar from "../component/navBar";
import Footer from "../component/footer";
import { AuthProvider } from "../context/authContext";
import { CartProvider } from "../context/cartContext";
import { SearchProvider } from "../context/searchContext"; // ✅ Ajout du SearchProvider
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider> 
          <Navbar />
          <main role="main">{children}</main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default MainLayout;
