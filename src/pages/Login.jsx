"use client";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginUser } from "../services/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email et mot de passe requis");
      return;
    }

    setIsLoading(true);
    try {
      const data = await loginUser(email, password);
      login(data.user, data.access_token); // Mise à jour du contexte Auth
      toast.success("Connexion réussie !");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      toast.error(err.detail || "Erreur inconnue");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    toast.info("Fonctionnalité de récupération à implémenter");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <div className="relative h-24 bg-gradient-to-r from-teal-600 to-teal-800 flex items-center justify-center">
              <div className="absolute bottom-0 left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,128C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="z-10 bg-white rounded-full p-3 shadow-lg">
                <div className="bg-gradient-to-r from-teal-600 to-teal-800 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SBER
                </div>
              </div>
            </div>

            <div className="px-8 pt-8 pb-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FontAwesomeIcon icon={faEnvelope} className="text-[#356872]" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FontAwesomeIcon icon={faLock} className="text-[#356872]" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-[#356872] hover:text-blue-800 hover:underline transition-colors"
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
              </form>

              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600 text-sm">or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="flex justify-center space-x-4">
                <button className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-transparent hover:bg-red-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-gray-600 group-hover:text-red-600 transition-colors"
                    size="lg"
                  />
                </button>
                <button className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-transparent hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-gray-600 group-hover:text-blue-400 transition-colors"
                    size="lg"
                  />
                </button>
                <button className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-transparent hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-gray-600 group-hover:text-blue-600 transition-colors"
                    size="lg"
                  />
                </button>
              </div>
            </div>

            <div className="py-4 text-center bg-gray-50 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Don't have an account?
                <Link
                  to="/signup"
                  className="text-[#356872] font-medium ml-1 hover:text-blue-800 hover:underline transition-colors"
                >
                  Register for free
                </Link>
              </p>
            </div>
          </div>

          <p className="text-center text-main text-xs mt-4 opacity-80">
            Protected by reCAPTCHA and subject to our Privacy Policy and Terms of Service
          </p>
        </div>
      </div>
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
    </>
  );
};

export default Login;
