'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Mouj Maalik Music School Logo"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6 max-w-md">
              Discover the joy of music through our comprehensive programs, expert instructors, and state-of-the-art facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-[#81E6D9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-200 hover:text-[#81E6D9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="text-gray-200 hover:text-[#81E6D9] transition-colors">
                  Courses
                </Link>
              </li>
              
              <li>
                <Link href="/#contact" className="text-gray-200 hover:text-[#81E6D9] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">📍</span>
                <div className="text-gray-200">
                  <div>G-8, Basement Block G, Lajpat Nagar I</div>
                  <div>New Delhi – 110024</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">📞</span>
                <span className="text-gray-200">+91 9711807406 | +91 9910014840</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">📧</span>
                <span className="text-gray-200">moujmaalikmusic@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">🕒</span>
                <span className="text-gray-200">Mon-Sat: 9AM-8PM</span>
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/moujmaalikmusic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#81E6D9] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/moujmaalikmusic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#81E6D9] transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 MOUJ MAALIK. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/holidays" className="text-gray-300 hover:text-[#81E6D9] transition-colors">
                Holiday 
              </Link>
              <Link href="/rules" className="text-gray-300 hover:text-[#81E6D9] transition-colors">
                Rules & Regulation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;