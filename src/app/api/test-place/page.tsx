"use client";

import { useState } from "react";

export default function TestPlaceAPI() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testNewAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      // Test the new Google Places API
      const response = await fetch("https://places.googleapis.com/v1/places/ChIJC6lmxarjDDkRZ2kndF6JQnE", {
        headers: {
          'X-Goog-Api-Key': 'AIzaSyANv8g4KsTQrJL9KKJ9nZ5zDBX9FIjhyck',
          'X-Goog-FieldMask': 'displayName,formattedAddress'
        }
      });
      
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log("New API Response:", data);
      setResult(data);
    } catch (err) {
      console.error("New API Error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const testLegacyAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      // Test the legacy API to compare
      const response = await fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJC6lmxarjDDkRZ2kndF6JQnE&fields=name&key=AIzaSyANv8g4KsTQrJL9KKJ9nZ5zDBX9FIjhyck");
      
      console.log("Legacy Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log("Legacy API Response:", data);
      setResult(data);
    } catch (err) {
      console.error("Legacy API Error:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Test Google Places API (New vs Legacy)</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Test New Places API</h2>
            <p className="text-gray-600 mb-4">This tests the new Google Places API v1 endpoint.</p>
            <button
              onClick={testNewAPI}
              disabled={loading}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Testing..." : "Test New API"}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Test Legacy API</h2>
            <p className="text-gray-600 mb-4">This tests the old Google Places API for comparison.</p>
            <button
              onClick={testLegacyAPI}
              disabled={loading}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 disabled:opacity-50"
            >
              {loading ? "Testing..." : "Test Legacy API"}
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
            <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm max-h-96">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
} 