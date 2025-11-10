import { useState } from "react"
import { Sprout, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-agro-primary" />
            <span className="text-xl font-heading font-bold text-agro-dark">
              Agropo <span className="text-agro-accent">Seeds</span>
            </span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <a
              href="#home"
              className="font-medium hover:text-agro-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium hover:text-agro-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="font-medium hover:text-agro-primary transition-colors"
            >
              Services
            </a>
            <Button
              className="bg-agro-primary hover:bg-agro-dark text-white"
              onClick={() => {
                setIsMenuOpen(false)
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get In Touch
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-4">
          <a
            href="#home"
            className="py-2 font-medium hover:text-agro-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="py-2 font-medium hover:text-agro-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="py-2 font-medium hover:text-agro-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <Button
            className="bg-agro-primary hover:bg-agro-dark text-white w-full"
            onClick={() => {
              setIsMenuOpen(false)
              const contactSection = document.querySelector("#contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Get In Touch
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
