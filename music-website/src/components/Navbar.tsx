'use client';

import { useState } from 'react';
import Link from 'next/link';

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
      <nav className="bg-white text-[#353535] shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#FFF176] rounded-full flex items-center justify-center">
                  <span className="text-[#353535] text-2xl">🎸</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#353535]">MOUJ MAALIK</span>
                  <span className="text-sm text-[#353535]/60">SCHOOL OF MUSIC</span>
                </div>
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <div>
              <button
                onClick={toggleMenu}
                className="text-[#353535] hover:text-[#FFF176] focus:outline-none focus:text-[#FFF176] p-2"
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
          <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#F7F7F7]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#FFF176] rounded-full flex items-center justify-center">
                  <span className="text-[#353535] text-xl">🎸</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[#353535]">MOUJ MAALIK</span>
                  <span className="text-xs text-[#353535]/60">SCHOOL OF MUSIC</span>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="text-[#353535]/60 hover:text-[#FFF176] transition-colors duration-200"
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
                  className="block py-3 px-4 text-lg font-medium text-[#353535] bg-[#FFF176] rounded-lg border-l-4 border-[#353535]"
                >
                  Home
                </Link>
                <Link 
                  href="/#about" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg text-[#353535] hover:text-[#353535] hover:bg-[#FFF176] rounded-lg transition-colors duration-200"
                >
                  About
                </Link>
                <Link 
                  href="/#contact" 
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg text-[#353535] hover:text-[#353535] hover:bg-[#FFF176] rounded-lg transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </nav>

              {/* Sidebar Footer */}
              <div className="mt-8 pt-6 border-t border-[#F7F7F7]">
                <div className="text-center">
                  <p className="text-sm text-[#353535]/60 mb-4">Ready to start your musical journey?</p>
                  <Link href="/#contact" onClick={closeMenu}>
                    <button className="w-full bg-[#FFF176] hover:bg-[#FFE066] text-[#353535] py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
                      Get Started Today
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;