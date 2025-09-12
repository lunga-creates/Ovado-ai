import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const NavLinks = ({ className }) => (
  <div className={`${className} relative`}>
    <a
      href="#home"
      className="hover:text-[#fdb529] transition-colors duration-300"
    >
      Home
    </a>
    <a
      href="#about-us"
      className="hover:text-[#fdb529] transition-colors duration-300"
    >
      About Us
    </a>
    <a
      href="#use-cases"
      className="hover:text-[#fdb529] transition-colors duration-300"
    >
      Use Cases
    </a>
    <a
      href="#deployment"
      className="hover:text-[#fdb529] transition-colors duration-300"
    >
      Deployment
    </a>
    <a
      href="#integrations"
      className="hover:text-[#fdb529] transition-colors duration-300"
    >
      Integrations
    </a>
    <a
      href="#faq"
      className="hover:text-[#fdb529] transition-colors duration-300"
    >
      FAQ
    </a>
    <a
      href="#contact-us"
      className="hover:text-[#fdb529] transition-colors duration-300"
    >
      Contact Us
    </a>
  </div>
)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 sm:py-4 px-6 sm:px-10 lg:px-20 bg-[#010c1e] text-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        <a href="/" className="block">
          {/* Fallback text logo in case image doesn't load */}
          <div className="flex items-center">
            <img
              src="/new-logo.png"
              alt="VADO.AI"
              className="h-6 w-auto object-contain max-w-none"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'block'
              }}
            />

            {/* Fallback text logo */}
            <div className="hidden text-3xl sm:text-4xl font-bold text-white">
              <span className="text-[#fdb529]">●</span>VADO.AI
            </div>
          </div>
        </a>
      </div>

      {/* Desktop Menu */}
      <NavLinks className="hidden min-[1200px]:flex gap-3 lg:gap-6 text-gray-300 transition-all duration-300 font-medium text-sm lg:text-base" />

      {/* Desktop CTA Button */}
      <div className="hidden min-[1200px]:flex items-center space-x-4 flex-shrink-0">
        <a
          href="#contact-us"
          className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 hover:text-black hover:bg-white rounded-lg cursor-pointer transition-all duration-300 text-center font-medium text-sm lg:text-base whitespace-nowrap"
        >
          Book a Demo Call
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="min-[1200px]:hidden flex-shrink-0">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-8 h-8 focus:outline-none focus:ring-2 focus:ring-[#fdb529] focus:ring-opacity-50 rounded"
          aria-label="Toggle mobile menu"
        >
          <Menu
            size={28}
            className={`absolute top-0 left-0 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            }`}
          />
          <X
            size={28}
            className={`absolute top-0 left-0 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#010c1e] min-[1200px]:hidden transition-all duration-300 ease-in-out border-t border-gray-800 ${
          isMenuOpen
            ? 'max-h-screen overflow-y-auto opacity-100'
            : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <NavLinks className="flex flex-col items-center space-y-6 py-8 text-gray-300 font-medium" />
        <div className="flex flex-col items-center space-y-4 pb-8">
          <a
            href="#contact-us"
            className="bg-blue-600 text-white px-6 py-3 hover:text-black hover:bg-white w-4/5 max-w-xs rounded-lg cursor-pointer transition-all duration-300 text-center font-medium"
          >
            Book a Demo Call
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
