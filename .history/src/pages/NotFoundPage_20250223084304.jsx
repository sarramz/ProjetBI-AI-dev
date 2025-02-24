import { Search, ShoppingCart, User } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-white text-gray-800">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-10 py-5 border-b">
        <h1 className="text-xl font-bold">Exclusive</h1>
        <div className="flex space-x-6">
          <a href="#" className="font-semibold text-black underline">
            Home
          </a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border px-3 py-1 rounded"
          />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer text-teal-700" />
        </div>
      </nav>

      {/* 404 Section */}
      <div className="flex flex-col items-center mt-20 text-center">
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
        <div className="relative mt-10">
          {/* Illustration */}
          <div className="relative flex justify-center">
            <img
              src="/mnt/data/imagev1.png"
              alt="404 Illustration"
              className="w-[400px]"
            />
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-teal-700 text-white rounded-lg">
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
