import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">EAC</h3>
            <p className="text-gray-400 leading-relaxed">
              Building your dreams with excellence and integrity. Your trusted partner in construction.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg">
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group">
                  <span className="mr-2 group-hover:translate-x-2 transition-transform">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group">
                  <span className="mr-2 group-hover:translate-x-2 transition-transform">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group">
                  <span className="mr-2 group-hover:translate-x-2 transition-transform">→</span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group">
                  <span className="mr-2 group-hover:translate-x-2 transition-transform">→</span>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded"></span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2 text-orange-500">✓</span>
                Commercial Construction
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-orange-500">✓</span>
                Residential Projects
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-orange-500">✓</span>
                Architecture Design
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-orange-500">✓</span>
                Project Management
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="mr-3 text-orange-500 text-xl">📍</span>
                <span>123 Construction Ave<br />Your City, State 12345</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-orange-500 text-xl">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-orange-500 text-xl">✉️</span>
                <span>info@eaconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center">
            <p className="text-gray-500 mb-2">
              &copy; {currentYear} Engineer Architect Consultancy. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Designed with <span className="text-red-500 animate-pulse">♥</span> for Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
