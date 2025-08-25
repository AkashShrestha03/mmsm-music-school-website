'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-700 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/logo.png" 
                    alt="Mouj Maalik Logo" 
                    width={80} 
                    height={80}
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <div>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 p-2 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <>
          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full w-80 bg-gray-700 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-600">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/logo.png" 
                    alt="Mouj Maalik Logo" 
                    width={64} 
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="p-6">
              <nav className="space-y-4">
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg font-medium text-white bg-gray-600 rounded-lg border-l-4 border-[#81E6D9]"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg text-gray-200 hover:text-white hover:bg-gray-600 rounded-lg transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link 
                  href="/#courses" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg text-gray-200 hover:text-white hover:bg-gray-600 rounded-lg transition-colors duration-200"
                >
                  Courses
                </Link>

                
                <Link 
                  href="/holidays" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg text-gray-200 hover:text-white hover:bg-gray-600 rounded-lg transition-colors duration-200"
                >
                  Holidays
                </Link>
                <Link 
                  href="/rules" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg text-gray-200 hover:text-white hover:bg-gray-600 rounded-lg transition-colors duration-200"
                >
                  Rules & Regulations
                </Link>
                <Link 
                  href="/#contact" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg text-gray-200 hover:text-white hover:bg-gray-600 rounded-lg transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;