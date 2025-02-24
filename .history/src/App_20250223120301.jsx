import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Footer from "./pages/footer.jsx"; // Import du footer
import ProfilePage from "./pages/profilepage.jsx";

const Home = () => <h1 className="text-4xl text-center mt-10">Bienvenue sur la page d'accueil</h1>;

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path='1' element={<footer/>} />
          <Route path='1' element={<ProfilePage/>} />
        </Routes>
        <Footer /> {/* Ajout du footer */}
      </div>
    </Router>
  );
};

export default App;
