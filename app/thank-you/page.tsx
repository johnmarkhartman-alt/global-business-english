export default function ThankYouPage() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Thank you!
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        We've received your request and will get back to you shortly.
      </p>

      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </main>
  );
}