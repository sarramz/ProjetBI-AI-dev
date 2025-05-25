
import ProductCard from "./ProductCard"

const featuredPhones = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 1234,
    image: "/placeholder.svg?height=250&width=200",
    badge: "Best Seller",
    badgeColor: "bg-red-500",
  },
  {
    id: 2,
    name: "Galaxy S24",
    brand: "Samsung",
    price: 799,
    originalPrice: 899,
    rating: 4.7,
    reviews: 856,
    image: "/placeholder.svg?height=250&width=200",
    badge: "New",
    badgeColor: "bg-teal-500",
  },
  {
    id: 3,
    name: "Pixel 8",
    brand: "Google",
    price: 699,
    originalPrice: 799,
    rating: 4.6,
    reviews: 642,
    image: "/placeholder.svg?height=250&width=200",
    badge: "AI Powered",
    badgeColor: "bg-blue-500",
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 599,
    originalPrice: 699,
    rating: 4.5,
    reviews: 423,
    image: "/placeholder.svg?height=250&width=200",
    badge: "Fast Charging",
    badgeColor: "bg-purple-500",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Phones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the latest and greatest smartphones
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPhones.map((phone) => (
            <ProductCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </section>
  )
}
