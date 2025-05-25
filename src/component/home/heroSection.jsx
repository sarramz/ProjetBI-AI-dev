"use client"

import { useState, useEffect } from "react"
import  Button  from "../ui/button"
import Badge from "../ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    title: "iPhone 15 Pro Max",
    subtitle: "Titanium. So strong. So light. So Pro.",
    price: "$1,199",
    originalPrice: "$1,299",
    image: "/placeholder.svg?height=400&width=300",
    gradient: "from-teal-600 to-teal-800",
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    subtitle: "Galaxy AI is here. Epic in every way.",
    price: "$1,099",
    originalPrice: "$1,199",
    image: "/placeholder.svg?height=400&width=300",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    title: "Google Pixel 8 Pro",
    subtitle: "The best of Google. Even more helpful.",
    price: "$899",
    originalPrice: "$999",
    image: "/placeholder.svg?height=400&width=300",
    gradient: "from-teal-700 to-teal-900",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${currentHero.gradient} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-4 text-white">{currentHero.title}</h1>
              <p className="text-xl mb-6 opacity-90">{currentHero.subtitle}</p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-white">{currentHero.price}</span>
                <span className="text-lg line-through opacity-70 text-white">{currentHero.originalPrice}</span>
                <Badge className="bg-red-500 ">Save $100</Badge>
              </div>
              <div className="flex space-x-4">
               <button className="bg-black text-white p-3 rounded-lg  text-lg">Shop Now </button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white  hover:bg-white hover:text-teal-700"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={currentHero.image || "/placeholder.svg"}
                alt={currentHero.title}
                className="h-96 w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
