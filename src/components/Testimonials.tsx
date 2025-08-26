'use client';

import { useState, useEffect } from 'react';
import { playButtonSound } from '../utils/soundEffects';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

interface PlaceInfo {
  name: string;
  formatted_address: string;
  rating: number;
  user_ratings_total: number;
}

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [placeInfo, setPlaceInfo] = useState<PlaceInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Google Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        console.log("Fetching Google reviews for testimonials...");
        
        const response = await fetch("/api/reviews");
        console.log("Response status:", response.status);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch reviews");
        }
        
        const data = await response.json();
        console.log("Received reviews data:", data);
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        // Handle the new response format
        if (data.reviews && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
          setPlaceInfo(data.placeInfo);
        } else if (Array.isArray(data)) {
          setReviews(data);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-purple-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </section>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <section className="py-20 bg-purple-50 text-center">
        <p className="text-gray-600">No testimonials available at the moment.</p>
        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      </section>
    );
  }

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Section Title */}
          <div>
            <h2 className="text-4xl font-extrabold text-black mb-4 font-['Montserrat']">
              What Our <span className="text-gray-600">Clients Say</span>
            </h2>

            {placeInfo && (
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold">{placeInfo.name}</h3>
                <p className="text-gray-600">{placeInfo.formatted_address}</p>
                <p className="mt-2 text-purple-600 font-bold">
                  ★ {placeInfo.rating} ({placeInfo.user_ratings_total} ratings)
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Featured Testimonial */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 relative">
              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(reviews[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-purple-500 text-xl">★</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                &ldquo;{reviews[activeTestimonial].text}&rdquo;
              </p>
              
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                {reviews[activeTestimonial].profile_photo_url ? (
                  <img
                    src={reviews[activeTestimonial].profile_photo_url}
                    alt={reviews[activeTestimonial].author_name}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">
                      {reviews[activeTestimonial].author_name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {reviews[activeTestimonial].author_name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {new Date(reviews[activeTestimonial].time * 1000).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Navigation */}
            <div className="absolute -right-4 top-8 flex flex-col space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="relative">
                  <div
                    className={`w-16 h-16 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'border-purple-500 scale-110' 
                        : 'border-purple-300 hover:border-purple-400'
                    }`}
                    onClick={() => {
                      setActiveTestimonial(index);
                      playButtonSound();
                    }}
                  >
                    {review.profile_photo_url ? (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-600 font-semibold text-lg">
                          {review.author_name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Active Indicator */}
                  {index === activeTestimonial && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8 lg:hidden">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTestimonial(index);
                playButtonSound();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === activeTestimonial ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
