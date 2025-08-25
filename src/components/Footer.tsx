import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Logo className="h-12 mb-6" />
            <p className="text-blue-200 mb-6">
              The Africa Stablecoin Network is dedicated to fostering
              collaboration, innovation, and growth of stablecoin ecosystems
              across Africa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/afristablecoin"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.x.com/afristablecoin"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/afristablecoin"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/afristablecoin"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-green-500 h-5 w-5 mt-1 mr-3" />
                <span className="text-blue-200">
                  info (@) afristablecoin.org
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="text-green-500 h-5 w-5 mt-1 mr-3" />
                <span className="text-blue-200">+2347025994794</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-green-500 h-5 w-5 mt-1 mr-3" />
                <span className="text-blue-200">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Africa Stablecoin Network. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://docs.google.com/document/d/1qs7EfUD60gPidhkqroNjEE3lPkBxpXRN_iRY11Vur5o/edit?usp=sharing"
                className="text-blue-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://docs.google.com/document/d/1qs7EfUD60gPidhkqroNjEE3lPkBxpXRN_iRY11Vur5o/edit?usp=sharing"
                className="text-blue-300 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
