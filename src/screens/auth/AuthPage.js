import React, { useState } from "react";
import "./Auth.css";

const AuthPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Data:", formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Partie gauche - Connexion */}
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <p>To keep connected with us<br />Please login with your personal info</p>
          <button className="login-btn">Log In</button>
        </div>

        {/* Partie droite - Inscription */}
        <div className="auth-right">
          <h2>Create Account</h2>
          <p className="social-text">Connect with your social media account</p>

          {/* Icônes des réseaux sociaux */}
          <div className="social-icons">
            <div className="social-icon">
              <img src="/images/g.avif" alt="Google" />
            </div>
            <div className="social-icon">
              <img src="/images/fb.png" alt="Facebook" />
            </div>
            <div className="social-icon">
              <img src="/images/X.jpg" alt="X" />
            </div>
          </div>

          <p className="or-divider">Or use your email for registration</p>

          {/* Formulaire d'inscription */}
          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Your Password" value={formData.confirmPassword} onChange={handleChange} required />
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;