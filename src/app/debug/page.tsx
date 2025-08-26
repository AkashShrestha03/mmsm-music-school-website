"use client";

import { useState } from "react";

export default function DebugPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testDirectGoogleAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      // Test the Google Places API directly
      const url = `https://places.googleapis.com/v1/places/ChIJC6lmxarjDDkRZ2kndF6JQnE?fields=displayName,formattedAddress,rating,userRatingCount,reviews`;
      
      const response = await fetch(url, {
        headers: {
          'X-Goog-Api-Key': 'AIzaSyANv8g4KsTQrJL9KKJ9nZ5zDBX9FIjhyck'
        }
      });
      
      console.log("Testing URL:", url);
      
      const data = await response.json();
      
      console.log("Direct Google API Response:", data);
      setResult(data);
    } catch (err) {
      console.error("Direct API Error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const testOurAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      
      console.log("Our API Response:", data);
      setResult(data);
    } catch (err) {
      console.error("Our API Error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Debug Google Places API - Fixed</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Test Direct Google API</h2>
            <p className="text-gray-600 mb-4">This tests the Google Places API directly to see if there are any issues with the API key or place ID.</p>
            <button
              onClick={testDirectGoogleAPI}
              disabled={loading}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Testing..." : "Test Direct Google API"}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Test Our API Endpoint</h2>
            <p className="text-gray-600 mb-4">This tests our Next.js API route that calls the Google Places API.</p>
            <button
              onClick={testOurAPI}
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Testing..." : "Test Our API"}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">API Response</h2>
            <div className="mb-4">
              <strong>Status:</strong> {result.status}
              {result.error_message && (
                <div className="text-red-600 mt-2">
                  <strong>Error Message:</strong> {result.error_message}
                </div>
              )}
            </div>
            <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm max-h-96">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
} 