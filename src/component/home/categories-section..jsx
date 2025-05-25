import { Card,CardContent } from "../ui/card"
const categories = [
  { name: "Apple", icon: "🍎", count: "25+ models" },
  { name: "Samsung", icon: "📱", count: "30+ models" },
  { name: "Google", icon: "🔍", count: "15+ models" },
  { name: "OnePlus", icon: "⚡", count: "20+ models" },
  { name: "Xiaomi", icon: "🚀", count: "35+ models" },
  { name: "Nothing", icon: "⚪", count: "10+ models" },
]

function CategoryCard({ name, icon, count }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-teal-200">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="font-semibold mb-2 group-hover:text-teal-600 transition-colors">{name}</h3>
        <p className="text-sm text-gray-600">{count}</p>
      </CardContent>
    </Card>
  )
}

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Brand</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the latest smartphones from your favorite brands</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
