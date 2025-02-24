import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <h1>Mon Site</h1>
      <Footer />
    </div>
  );
}
export default App;


const Home = () => <h1 className="text-4xl text-center mt-10">Bienvenue sur la page d'accueil</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
