import  Button  from "../ui/button"
import Input  from "../ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-teal-100 mb-8 text-lg">
          Get the latest phone releases, exclusive deals, and tech news delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            placeholder="Enter your email"
            className="bg-white border-0 flex-1 focus-visible:ring-2 focus-visible:ring-teal-300"
          />
          <Button className="bg-white text-teal-700 hover:bg-gray-100 font-semibold">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
