import React from "react";
import Navbar from "../component/navBar";
import Footer from "../component/footer";
import { AuthProvider } from "../context/authContext";
import { CartProvider } from "../context/cartContext";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};

export default MainLayout;
