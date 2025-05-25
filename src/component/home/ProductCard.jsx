import Button from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import Badge from "../ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"

export default function ProductCard({ phone }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 hover:border-teal-200">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden">
          <img
            src={phone.image || "/placeholder.svg"}
            alt={phone.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className={`absolute top-4 left-4 ${phone.badgeColor} text-white`}>{phone.badge}</Badge>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white hover:text-teal-600"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{phone.brand}</span>
          <h3 className="font-semibold text-lg group-hover:text-teal-600 transition-colors">{phone.name}</h3>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex items-center">{renderStars(phone.rating)}</div>
          <span className="text-sm text-gray-600 ml-2">({phone.reviews})</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">${phone.price}</span>
          <span className="text-lg text-gray-500 line-through">${phone.originalPrice}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-teal-600 hover:bg-teal-700 transition-colors">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
