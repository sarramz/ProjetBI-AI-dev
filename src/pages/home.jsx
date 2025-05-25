"use client";

import HeroSection from "../component/home/heroSection";
import FeaturesSection from "../component/home/features-section";
import CategoriesSection from "../component/home/categories-section";
import FeaturedProducts from "../component/home/featured-products";
import NewsletterSection from "../component/home/newsletter-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <FeaturedProducts />
      <NewsletterSection />
    </div>
  );
}