import React, { useState } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Gaming PC",
      subtitle: "RTX 4080",
      discount: "70%",
      image: "https://www.jouleperformance.com/media/catalog/product/8/d/8d713093-984a-46fe-bd6c-3b18633b52d9.png?optimize=medium&fit=bounds&height=450&width=600&canvas=600:450",
    },
  ];

  return (
    <div className="relative bg-navy-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 bg-black">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{slides[currentSlide].title}</h1>
            <p className="text-2xl">{slides[currentSlide].subtitle}</p>
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-center">
            <img 
              src={slides[currentSlide].image || "/placeholder.svg"} 
              alt="Gaming PC" 
              className="w-96 h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="text-right space-y-4">
            <div className="text-6xl font-bold">
              {slides[currentSlide].discount}
              <span className="block text-3xl">SALES</span>
            </div>
            <button className="bg-white text-navy-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-[#0B162C]">
              Shop now
            </button>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-4' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
