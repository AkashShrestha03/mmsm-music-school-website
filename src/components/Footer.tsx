'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#FAF3DD] text-[#353535] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#FFF176] rounded-full flex items-center justify-center">
                <span className="text-[#353535] text-2xl">🎸</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#353535]">MOUJ MAALIK</span>
                <span className="text-sm text-[#353535]/60">SCHOOL OF MUSIC</span>
              </div>
            </div>
            <p className="text-lg text-[#353535] leading-relaxed mb-6 max-w-md">
              Discover the joy of music through our comprehensive programs, expert instructors, and state-of-the-art facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#353535] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#353535] hover:text-[#81E6D9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-[#353535] hover:text-[#81E6D9] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="text-[#353535] hover:text-[#81E6D9] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-[#353535] hover:text-[#81E6D9] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[#353535] hover:text-[#81E6D9] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#353535] mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">📍</span>
                <span className="text-[#353535]">123 Music Street, Harmony City</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">📞</span>
                <span className="text-[#353535]">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">📧</span>
                <span className="text-[#353535]">info@moujmaalik.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#81E6D9] text-lg">🕒</span>
                <span className="text-[#353535]">Mon-Sat: 9AM-8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#C8F8E4]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#353535]/70 text-sm mb-4 md:mb-0">
              © 2025 MOUJ MAALIK. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-[#353535]/70 hover:text-[#81E6D9] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#353535]/70 hover:text-[#81E6D9] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-[#353535]/70 hover:text-[#81E6D9] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;