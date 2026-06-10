export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16">

      <section className="mb-24">
        <h1 className="text-6xl font-bold mb-6">
          Global Business English
        </h1>

        <p className="text-2xl mb-8 text-gray-600">
          AI-powered English learning solutions for Vietnamese students,
          teachers, and language centers.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Request Demo
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-4">
          IELTS-Coach
        </h2>

        <p className="text-xl mb-6">
          Unlimited IELTS speaking practice with instant AI feedback
          in both English and Vietnamese.
        </p>

        <ul className="space-y-2 mb-6">
          <li>✓ IELTS-style speaking prompts</li>
          <li>✓ AI band score estimation</li>
          <li>✓ Detailed feedback and improvement suggestions</li>
          <li>✓ English and Vietnamese support</li>
        </ul>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Start Free Trial
        </button>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-4">
          SoundStar
        </h2>

        <p className="text-xl mb-4">
          Pronunciation assessment and reporting for young learners.
        </p>

        <div className="inline-block bg-yellow-100 px-4 py-2 rounded">
          Coming Soon
        </div>
      </section>

    </main>
  );
}