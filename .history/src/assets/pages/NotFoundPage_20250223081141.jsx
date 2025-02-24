import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <nav className="absolute top-5 left-5 font-bold text-lg">Exclusive</nav>
      <div className="text-center">
        <h1 className="text-5xl font-semibold">Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-500">Oops! The page you are looking for does not exist.</p>
        <img
          src="/image.png" 
          alt="404 Illustration"
          className="w-1/2 max-w-md mx-auto mt-6"
        />
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
