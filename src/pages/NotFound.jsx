export default function NotFoundPage() {
    return (
      <div className="flex items-center justify-between w-screen h-screen px-10 bg-white">
        {/* Texte */}
        <div className="flex-1 text-left pl-10">
          <h2 className="text-6xl font-bold text-gray-800 whitespace-nowrap">Page Not Found</h2>
          <a href="/" className="inline-block mt-6 px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700 transition">
            BACK TO HOME
          </a>
        </div>
        
        {/* Image */}
        <div className="flex-1 flex justify-end items-center">
          <img src="/images/image1.png" alt="404 Illustration" className="w-4/5 max-w-lg" />
        </div>
      </div>
    );
  }
  