'use client'

import { motion } from 'framer-motion'
import { Music, Heart, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-300">
          © 2024 Mouj Maalik School of Music. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
