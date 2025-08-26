"use client";

import { useState, useEffect } from "react";

interface Review {
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

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [placeInfo, setPlaceInfo] = useState<PlaceInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        console.log("Fetching reviews from /api/reviews...");
        
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
          // Fallback for old format
          setReviews(data);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center p-8 text-gray-600">
        <p>No reviews found from Google Places API.</p>
        <p className="text-sm mt-2">Check the browser console for debugging info.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      
      {placeInfo && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">{placeInfo.name}</h3>
          <p className="text-blue-600 mb-2">{placeInfo.formatted_address}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg mr-1">★</span>
              <span className="font-semibold">{placeInfo.rating}</span>
            </div>
            <span className="text-blue-600">({placeInfo.user_ratings_total} total ratings)</span>
          </div>
        </div>
      )}
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              {review.profile_photo_url && (
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-10 h-10 rounded-full mr-3"
                />
              )}
              <div>
                <h3 className="font-semibold text-gray-800">
                  {review.author_name}
                </h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {review.text}
            </p>
            <p className="text-xs text-gray-400 mt-3">
              {new Date(review.time * 1000).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 