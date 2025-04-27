import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faLock, 
  faSpinner 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGoogle, 
  faFacebookF, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({...errors, [name]: ""});
    }
    
    // Calculate password strength
    if (name === "password") {
      calculatePasswordStrength(value);
    }
    
    // Check password match
    if (name === "confirmPassword" || (name === "password" && formData.confirmPassword)) {
      if (name === "password" && value !== formData.confirmPassword) {
        setErrors({...errors, confirmPassword: "Passwords do not match"});
      } else if (name === "confirmPassword" && value !== formData.password) {
        setErrors({...errors, confirmPassword: "Passwords do not match"});
      } else {
        setErrors({...errors, confirmPassword: ""});
      }
    }
  };
  
  const calculatePasswordStrength = (password) => {
    // Simple password strength calculation
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("User Data:", formData);
      setLoading(false);
      // Here you would typically redirect or show success message
    }, 1500);
  };
  
  const getStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-200";
    if (passwordStrength === 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-orange-500";
    if (passwordStrength === 3) return "bg-yellow-500";
    return "bg-green-500";
  };
  
  const getStrengthText = () => {
    if (!formData.password) return "";
    if (passwordStrength === 1) return "Weak";
    if (passwordStrength === 2) return "Fair";
    if (passwordStrength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="flex w-full max-w-4xl flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white">
        {/* Left Side - Login */}
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-gradient-to-br from-teal-600 to-teal-800 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
            <p className="text-base mb-8 opacity-90 max-w-xs mx-auto">
              To keep connected with us, please login with your personal info
            </p>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-teal-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Log In
            </button>
          </div>
        </div>

        {/* Right Side - Sign Up */}
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>
          <p className="text-gray-600 mb-6">Connect with your social media account</p>

          {/* Social Icons with FontAwesome */}
          <div className="flex space-x-4 mb-6">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <FontAwesomeIcon icon={faGoogle} className="text-xl" style={{ color: '#EA4335' }} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" style={{ color: '#1877F2' }} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" style={{ color: '#1DA1F2' }} />
            </button>
          </div>

          <div className="flex items-center w-full max-w-sm mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-4 text-gray-500 text-sm">Or use your email</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Sign-Up Form */}
          <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 pl-10 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              <FontAwesomeIcon 
                icon={faUser} 
                className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 pl-10 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
            </div>
            
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 pl-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              <FontAwesomeIcon 
                icon={faLock} 
                className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
              />
              {errors.password && <p className="text-red-500 text-xs mt-1 text-left">{errors.password}</p>}
              
              {formData.password && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex space-x-1 flex-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 flex-1 rounded-full ${i < passwordStrength ? getStrengthColor() : 'bg-gray-200'}`}
                        ></div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">{getStrengthText()}</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 pl-10 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all`}
              />
              <FontAwesomeIcon 
                icon={faLock} 
                className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 text-left">{errors.confirmPassword}</p>}
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-teal-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-teal-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 mt-2 relative overflow-hidden"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                  Processing...
                </span>
              ) : "Sign Up"}
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-6">
            By signing up, you agree to our{" "}
            <a href="#" className="text-teal-600 hover:underline">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
