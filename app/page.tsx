import Image from "next/image";
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
    <a
      href="https://forms.gle/iBasd4pJZ89M9yE1A"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-700 transition"
    >
      Request Demo
    </a>

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
<div className="mb-8">
  <Image
    src="/images/ielts-main.png"
    alt="IELTS-Coach speaking practice interface"
    width={1200}
    height={800}
    className="rounded-xl shadow-lg border"
  />
</div>
        <ul className="space-y-2 mb-6">
          <li>✓ IELTS-style speaking prompts</li>
          <li>✓ AI band score estimation</li>
          <li>✓ Detailed feedback and improvement suggestions</li>
          <li>✓ English and Vietnamese support</li>
        </ul>

        <a
  href="https://fabulous-puppy-bb7e30.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
  Start Free Trial
</a>
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