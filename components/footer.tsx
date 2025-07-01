import { Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Name and Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Fahmi</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into digital reality through creative design
              and development.
            </p>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="block text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Portfolio
              </a>
              <a
                href="#kontak"
                className="block text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Order
              </a>
            </nav>
          </div>

          {/* Right Column - Social Media Icons */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://linkedin.com/in/fahmi-nashruddin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-200 group"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://github.com/fahminashruddin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Fahmi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
