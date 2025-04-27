import { Facebook, Linkedin, Twitter, Send, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0e1a] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Contact */}
          <div className="space-y-4">
            <img src="/logo.png" alt="LIFT Logo" className="w-28" />
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={16} className="text-[#4A919E]" />
                <span>+216 00 000 000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} className="text-[#4A919E]" />
                <span>contact@sber.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/"
                className="bg-[#4A919E] p-2 rounded-full hover:bg-[#35737D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                className="bg-[#4A919E] p-2 rounded-full hover:bg-[#35737D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com"
                className="bg-[#4A919E] p-2 rounded-full hover:bg-[#35737D] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#4A919E] after:left-0 after:-bottom-2">
              Quick Links
            </h4>
            <ul className="space-y-3 mt-6">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4A919E] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#4A919E] group-hover:w-3 transition-all duration-300"></span>
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4A919E] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#4A919E] group-hover:w-3 transition-all duration-300"></span>
                  Information
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#4A919E] after:left-0 after:-bottom-2">
              Company
            </h4>
            <ul className="space-y-3 mt-6">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4A919E] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#4A919E] group-hover:w-3 transition-all duration-300"></span>
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4A919E] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#4A919E] group-hover:w-3 transition-all duration-300"></span>
                  SBER shops
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#4A919E] after:left-0 after:-bottom-2">
              Subscribe
            </h4>
            <div className="mt-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Get product updates"
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-[#1a1f2e] border border-gray-700 focus:border-[#4A919E] outline-none transition-colors"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#4A919E] text-white p-1.5 rounded-md hover:bg-[#35737D] transition-colors"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            A product of <span className="font-bold text-white">SBER</span>
          </p>
          <p>© {new Date().getFullYear()} SBER . All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

