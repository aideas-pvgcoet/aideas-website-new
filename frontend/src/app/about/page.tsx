export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">About Aideas</h1>

        <p className="text-lg text-gray-300 mb-6">
          <strong>Aideas</strong> is the official technical association of our department, built by passionate students 
          and guided by experienced faculty. Our mission is to foster innovation, hands-on learning, and collaboration 
          through events, workshops, and real-world projects.
        </p>

        <p className="text-md text-gray-400 mb-4">
          We host technical events like coding competitions, hackathons, seminars, and guest lectures — all aimed at
          preparing students for industry needs and advanced research. As a community, we empower every member to share 
          knowledge, build portfolio-worthy projects, and grow together.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Our Vision</h2>
          <p className="text-gray-300">
            To become a self-sustaining, innovative, and inclusive technical community that inspires students to
            solve real-world problems and build a better digital future.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Our Mission</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Encourage peer-to-peer learning and knowledge sharing</li>
            <li>Bridge the gap between academia and industry</li>
            <li>Provide hands-on experience through technical projects</li>
            <li>Organize events that fuel creativity and innovation</li>
            <li>Build leadership and teamwork skills in students</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
