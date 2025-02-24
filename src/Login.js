import React from "react";
import "./Login.css";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa"; // Import icons

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Your Logo</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="username@gmail.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Sign in</button>
        </form>
        <div className="continue-text">or continue with</div>
        <div className="social-buttons">
          <button className="social-button"><FaGoogle size={20} color="#DB4437" /></button>
          <button className="social-button"><FaGithub size={20} color="black" /></button>
          <button className="social-button"><FaFacebook size={20} color="#1877F2" /></button>
        </div>
        <div className="register-text">
          Don't have an account? <a href="#">Register for free</a>
        </div>
      </div>
    </div>
  );
};

export default Login;