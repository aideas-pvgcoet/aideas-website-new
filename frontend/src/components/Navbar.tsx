'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLHeadingElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const letters = logoRef.current?.querySelectorAll('span');
    if (letters) {
      gsap.fromTo(
        letters,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, []);

  // Split logo text into spans
  const logo = 'aideas'.split('').map((char, index) => (
    <span key={index} className="inline-block">
      {char}
    </span>
  ));

  return (
    <header className="sticky z-20 top-0 w-full bg-black border-b-2 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 🟢 Fancy Animated Logo */}
        <h1 ref={logoRef} className="text-3xl font-bold text-blue-600">
          {logo}
        </h1>

        {/* 📱 Mobile toggle */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 🔗 Desktop Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/sessions">Sessions</Link>
          <Link href="/members">Members</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>

      {/* 📱 Mobile Nav */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-1/2 z-50 bg-black px-6 py-4 flex flex-col items-center space-y-4 text-sm border-t border-zinc-700">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/sessions" onClick={() => setIsOpen(false)}>Sessions</Link>
          <Link href="/members" onClick={() => setIsOpen(false)}>Members</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
