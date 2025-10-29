'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white/90 backdrop-blur-md shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-48 h-16">
              <Image 
                src="/logo.svg" 
                alt="EA Construction Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block text-gray-900 text-sm font-bold tracking-tight">
              Engineer Architect Consultancy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-800 font-semibold hover:text-orange-500 transition-colors relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-800 font-semibold hover:text-orange-500 transition-colors relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-800 font-semibold hover:text-orange-500 transition-colors relative group">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-800 font-semibold hover:text-orange-500 transition-colors relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-800 font-semibold hover:text-orange-500 transition-colors relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-800 focus:outline-none hover:text-orange-500 transition-colors"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-6">
          <li>
            <Link href="/" onClick={closeMenu} className="text-gray-800 font-semibold hover:text-orange-500 transition-colors block py-2 border-b border-gray-100 hover:border-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu} className="text-gray-800 font-semibold hover:text-orange-500 transition-colors block py-2 border-b border-gray-100 hover:border-orange-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={closeMenu} className="text-gray-800 font-semibold hover:text-orange-500 transition-colors block py-2 border-b border-gray-100 hover:border-orange-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="text-gray-800 font-semibold hover:text-orange-500 transition-colors block py-2 border-b border-gray-100 hover:border-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="text-gray-800 font-semibold hover:text-orange-500 transition-colors block py-2 border-b border-gray-100 hover:border-orange-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
