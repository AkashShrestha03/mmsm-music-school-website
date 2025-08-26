import GoogleReviews from "@/components/GoogleReviews";

export default function TestReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Test Google Reviews API</h1>
        <GoogleReviews />
      </div>
    </div>
  );
} 