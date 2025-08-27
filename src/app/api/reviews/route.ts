import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Fetching reviews from Google Places API...");
    
    // First, let's test if the place exists and get basic info
    const basicResponse = await axios.get(
      "https://places.googleapis.com/v1/places/ChIJC6lmxarjDDkRZ2kndF6JQnE",
      {
        headers: {
          'X-Goog-Api-Key': 'AIzaSyANv8g4KsTQrJL9KKJ9nZ5zDBX9FIjhyck',
          'X-Goog-FieldMask': 'displayName,formattedAddress,rating,userRatingCount'
        }
      }
    );

    console.log("Basic Place Info Response:", basicResponse.data);
    
    if (basicResponse.status !== 200) {
      console.error("Google API Error:", basicResponse.statusText);
      return NextResponse.json(
        { 
          error: `Google API Error: ${basicResponse.status}`,
          details: basicResponse.statusText || "Unknown error"
        },
        { status: 400 }
      );
    }

    // Now try to get reviews
    const reviewsResponse = await axios.get(
      "https://places.googleapis.com/v1/places/ChIJC6lmxarjDDkRZ2kndF6JQnE",
      {
        headers: {
          'X-Goog-Api-Key': 'AIzaSyANv8g4KsTQrJL9KKJ9nZ5zDBX9FIjhyck',
          'X-Goog-FieldMask': 'reviews'
        }
      }
    );

    console.log("Reviews Response:", reviewsResponse.data);
    
    const placeInfo = basicResponse.data;
    const reviews = reviewsResponse.data.reviews || [];
    
    console.log(`Place: ${placeInfo.displayName?.text || 'Unknown'}`);
    console.log(`Address: ${placeInfo.formattedAddress || 'Unknown'}`);
    console.log(`Rating: ${placeInfo.rating || 'No rating'}`);
    console.log(`Total Ratings: ${placeInfo.userRatingCount || 0}`);
    console.log(`Found ${reviews.length} reviews`);
    
    return NextResponse.json({
      placeInfo: {
        name: placeInfo.displayName?.text || 'Unknown',
        formatted_address: placeInfo.formattedAddress || 'Unknown',
        rating: placeInfo.rating || 0,
        user_ratings_total: placeInfo.userRatingCount || 0
      },
      reviews,
      message: `Successfully fetched data for ${placeInfo.displayName?.text || 'Unknown'}`
    });
  } catch (error) {
    console.error("API Error:", error);
    
    // Fallback to mock data if Google API fails
    console.log("Falling back to mock data...");
    
    const mockPlaceInfo = {
      name: "Mouj Maalik School Of Music, School of Music Production, Jampads, Recording Studio and Soundproofing/Acoustic Solutions",
      formatted_address: "Delhi, India",
      rating: 5,
      user_ratings_total: 106
    };
    
    const mockReviews = [
      {
        author_name: "Ritesh Kumar",
        rating: 5,
        text: "My son is learning Guitar here and he is Grade 4 Trinity Rock and Pop and as far as i have seen the progress, it's really fantastic and teachers are also very hardworking with the students as they love to impart right knowledge.",
        time: Math.floor(Date.now() / 1000) - 5184000, // 2 months ago
        profile_photo_url: undefined
      },
      {
        author_name: "Abhishek Mishra",
        rating: 5,
        text: "Hi everyone Abhishek this side, as a Tabla instructor Faculty would like to share that this is the only place I have seen with lot of positive environment both for teachers and students as the owner is very clear with his words and doesn't make any wrong commitments regarding music teaching.",
        time: Math.floor(Date.now() / 1000) - 15552000, // 6 months ago
        profile_photo_url: undefined
      },
      {
        author_name: "Singki Lama",
        rating: 5,
                text: "Very amazing teaching as I am learning drums from the 2 years and I have seen lot of improvement in my playing style. Thanks to mouj maalik",
        time: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
        profile_photo_url: undefined
      }
    ];
    
    return NextResponse.json({
      placeInfo: mockPlaceInfo,
      reviews: mockReviews,
      message: "Using fallback data - Google API unavailable"
    });
  }
} 