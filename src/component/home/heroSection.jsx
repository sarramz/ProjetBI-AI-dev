import React, { useState } from "react";

const slides = [
  {
    title: "Gaming PC",
    subtitle: "RTX 4080",
    discount: "70%",
    image:
      "https://www.jouleperformance.com/media/catalog/product/8/d/8d713093-984a-46fe-bd6c-3b18633b52d9.png?optimize=medium&fit=bounds&height=450&width=600&canvas=600:450",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative bg-black text-white">
      <div className="container mx-auto px-4 py-12 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-4 text-center md:text-left md:flex-1">
            <h1 className="text-5xl font-bold">{slides[currentSlide].title}</h1>
            <p className="text-2xl">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="flex-1 flex justify-center my-6 md:my-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-96 h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="text-center md:text-right md:flex-1 space-y-4">
            <div className="text-7xl font-extrabold">
              {slides[currentSlide].discount}
              <span className="block text-3xl">SALES</span>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 font-semibold shadow-md">
              Shop now
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-6" : "bg-gray-500"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
