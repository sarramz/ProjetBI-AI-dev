import { Truck, Shield, RotateCcw, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $99",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Shield,
    title: "Warranty",
    description: "2 year protection",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30 day return policy",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert assistance",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]

function FeatureCard({ icon: Icon, title, description, bgColor, iconColor }) {
  return (
    <div className="text-center">
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`h-8 w-8 ${iconColor}`} />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
