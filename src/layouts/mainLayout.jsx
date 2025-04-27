import React from "react";
import Navbar from "../component/navBar";
import Footer from "../component/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
