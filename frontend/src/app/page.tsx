
import Link from "next/link";

export default function Home() {
  return (
    <div >
   <header className="w-full bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo aligned to left */}
        <h1 className="text-3xl font-bold text-red-600">aideas</h1>

        {/* Navigation Links aligned to right */}
        <nav className="space-x-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/podcasts">Podcasts</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/members">Members</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
    </div>
  );
}
