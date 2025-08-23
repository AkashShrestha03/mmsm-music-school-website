'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                                  <span className="text-white text-2xl">🎸</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">MOUJ MAALIK</span>
                <span className="text-sm text-gray-300">SCHOOL OF MUSIC</span>
              </div>
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
                <Link href="/#gallery" className="text-gray-200 hover:text-[#81E6D9] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-200 hover:text-[#81E6D9] transition-colors">
                  Contact
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