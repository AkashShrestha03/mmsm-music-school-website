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
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
            Get in <span className="text-gray-600">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-['Nunito']">
            Ready to start your musical journey? We&apos;d love to hear from you and help you discover your passion for music.
          </p>
        </div>

        {/* Two Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Contact Details & Map */}
          <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
                             <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mr-4">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-['Montserrat']">Visit Our Studio</h3>
               </div>
              
              <div className="space-y-6">
                {/* Map */}
                <div className="relative group">
                  <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8414633432562!2d77.24224171202825!3d28.574522975595123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ab8ad4c6bb%3A0x872cdbaeaa283122!2sG-20%2C%20Block%20G%2C%20Lajpat%20Nagar%20I%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1755853469560!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="MMSM Music School Location"
                      className="group-hover:scale-105 transition-transform duration-700"
                    ></iframe>
                  </div>
                </div>

                                 {/* Quick Contact Info */}
                 <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                   <h4 className="text-lg font-semibold text-gray-800 mb-4 font-['Montserrat']">📍 Find Us Here</h4>
                   <p className="text-gray-600 font-['Nunito'] leading-relaxed mb-4">
                     Located in the heart of Lajpat Nagar, our music studio is easily accessible and provides the perfect environment for learning and creating music.
                   </p>
                   
                   {/* Social Media Links */}
                   <div className="flex items-center space-x-4">
                     <h5 className="text-sm font-semibold text-gray-700 font-['Montserrat']">Follow us:</h5>
                     <a 
                       href="https://www.instagram.com/mouj_maalik_school_of_music?igsh=MWllemR2cXR5amJicg==" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                     >
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                       </svg>
                     </a>
                     <a 
                       href="https://www.facebook.com/share/19USaGMTAn/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                     >
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                       </svg>
                     </a>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 2: Contact Form */}
          <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
                             <div className="flex items-center mb-6">
                 <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mr-4">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-['Montserrat']">Send a Message</h3>
               </div>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3 font-['Montserrat']">Message Sent Successfully!</h4>
                  <p className="text-gray-600 font-['Nunito']">Thank you for contacting us. We&apos;ll get back to you within 24 hours!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-gray-800 font-semibold text-sm uppercase tracking-wide font-['Montserrat']">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm font-['Nunito']"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-800 font-semibold text-sm uppercase tracking-wide font-['Montserrat']">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm font-['Nunito']"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-gray-800 font-semibold text-sm uppercase tracking-wide font-['Montserrat']">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-3 flex items-start pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm resize-none font-['Nunito']"
                        placeholder="Tell us about your musical interests, preferred instruments, and any questions you have..."
                      />
                    </div>
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

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-['Montserrat']">Ready to Start Your Musical Journey?</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex flex-col items-center space-y-3">
                 <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h4 className="font-semibold text-gray-800 font-['Montserrat']">Expert Teachers</h4>
                 <p className="text-gray-600 text-sm font-['Nunito']">Learn from certified and experienced instructors</p>
               </div>
               <div className="flex flex-col items-center space-y-3">
                 <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                   </svg>
                 </div>
                <h4 className="font-semibold text-gray-800 font-['Montserrat']">Modern Equipment</h4>
                <p className="text-gray-600 text-sm font-['Nunito']">State-of-the-art instruments and recording facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
