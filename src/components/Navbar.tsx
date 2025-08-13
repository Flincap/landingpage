import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="z-50">
          <Link to="/">
            <Logo className="h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-blue-900 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-full"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="text-blue-900 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-full"
          >
            Events
          </Link>
          <a
            href="/#about"
            className="text-blue-900 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Us
          </a>
          <a
            href="/#contact"
            className="text-blue-900 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/drive/folders/16mrdO5-lheId1-mZ_m3sY4QoVHuT8pXa"
            className="text-blue-900 hover:text-green-600 text-sm font-medium transition-colors px-4 py-2 rounded-full"
          >
            Become a member
          </a>
          <a
            href="https://forms.gle/H6tDNApgEATnotiM8"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Gallery
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-neutral-800" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-800" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <nav className="flex flex-col space-y-8 text-center">
              <Link
                to="/"
                className="text-blue-900 hover:text-green-600 text-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-blue-900 hover:text-green-600 text-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <a
                href="/#about"
                className="text-blue-900 hover:text-green-600 text-lg font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                About Us
              </a>
              <a
                href="/#contact"
                className="text-blue-900 hover:text-green-600 text-lg font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
              <a
                href="https://forms.gle/H6tDNApgEATnotiM8"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
