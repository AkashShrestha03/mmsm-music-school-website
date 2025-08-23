'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            Get in <span className="text-gray-600">Touch</span>
          </h2>
        </div>

        {/* Two Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Contact Details & Map */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-['Montserrat']">Contact Information</h3>
            
            <div className="space-y-6">
                             {/* Address */}
               <div className="flex items-start space-x-4">
                 <div className="w-6 h-6 text-gray-700 mt-1">
                   📍
                 </div>
                 <div>
                   <p className="text-gray-700 font-medium">G-8, Basement Block G, Lajpat Nagar I</p>
                   <p className="text-gray-700">New Delhi – 110024</p>
                 </div>
               </div>

               {/* Email */}
               <div className="flex items-start space-x-4">
                 <div className="w-6 h-6 text-gray-700 mt-1">
                   📧
                 </div>
                 <div>
                   <p className="text-gray-700 font-medium">moujmaalikmusic@gmail.com</p>
                 </div>
               </div>

               {/* Phone Numbers */}
               <div className="flex items-start space-x-4">
                 <div className="w-6 h-6 text-gray-700 mt-1">
                   📞
                 </div>
                 <div>
                   <p className="text-gray-700 font-medium">+91 9711807406 | +91 9910014840</p>
                 </div>
               </div>

                             {/* Map */}
               <div className="pt-4">
                 <div className="w-full h-64 rounded-lg overflow-hidden">
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8414633432562!2d77.24224171202825!3d28.574522975595123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ab8ad4c6bb%3A0x872cdbaeaa283122!2sG-20%2C%20Block%20G%2C%20Lajpat%20Nagar%20I%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1755853469560!5m2!1sen!2sin"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="MMSM Music School Location"
                   ></iframe>
                 </div>
               </div>
            </div>
          </div>

          {/* Card 2: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-['Montserrat']">Leave us a message</h3>
            
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500 resize-none"
                    placeholder="Tell us about your musical interests and goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
