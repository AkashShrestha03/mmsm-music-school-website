'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <section id="contact" className="py-20 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 font-['Montserrat']">
            Contact <span className="text-black">Us</span>
          </h2>
          <p className="text-xl text-[#353535] max-w-3xl mx-auto font-['Nunito']">
            Ready to start your musical journey? Get in touch with us today.
          </p>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Who We Serve */}
          <div>
                         <h3 className="text-2xl font-bold text-black mb-6 font-['Montserrat']">Who We Serve</h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop"
                  alt="Music lesson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="text-[#353535] leading-relaxed mb-6 font-['Nunito']">
                  We offer music lessons for students of all levels, from complete beginners to advanced musicians. 
                  Our experienced instructors are passionate about helping you achieve your musical goals.
                </p>
                <button className="w-full py-3 bg-[#FFF176] hover:bg-[#FFE066] text-[#353535] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-['Nunito']">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
                         <h3 className="text-2xl font-bold text-black mb-6 font-['Montserrat']">Contact Us</h3>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                                     <h4 className="text-2xl font-bold text-black mb-2 font-['Montserrat']">Message Sent!</h4>
                  <p className="text-[#353535] font-['Nunito']">Thank you for contacting us. We&apos;ll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#353535] font-medium mb-2 font-['Nunito']">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#C8F8E4] rounded-lg text-[#353535] placeholder-[#353535]/50 focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#353535] font-medium mb-2 font-['Nunito']">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#C8F8E4] rounded-lg text-[#353535] placeholder-[#353535]/50 focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#353535] font-medium mb-2 font-['Nunito']">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#C8F8E4] rounded-lg text-[#353535] placeholder-[#353535]/50 focus:outline-none focus:ring-2 focus:ring-[#81E6D9] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your musical interests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#FFF176] hover:bg-[#FFE066] disabled:bg-[#FFF176]/50 text-[#353535] font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed font-['Nunito']"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#353535] mr-3"></div>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Row: Location with Real Map */}
        <div>
                     <h3 className="text-2xl font-bold text-black mb-6 font-['Montserrat']">Our Location</h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Google Maps Embed */}
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.289056429655!2d-122.41941518468153!3d37.77492977975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7fbb5a03%3A0xf6f66cbd7c0f7b6!2sMusic%20School!5e0!3m2!1sen!2sus!4v1678901234567"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-6">
              <p className="text-[#353535] text-sm leading-relaxed font-['Nunito']">
                Located in the heart of the city, our music school is easily accessible and provides a welcoming environment for all music enthusiasts.
              </p>
              <div className="mt-4 pt-4 border-t border-[#C8F8E4]">
                <p className="text-[#353535] text-sm font-['Nunito']">
                  <strong>Address:</strong> 123 Music Street, Harmony City
                </p>
                <p className="text-[#353535] text-sm font-['Nunito']">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
