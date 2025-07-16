'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import Image from 'next/image';
import i from "@/components/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

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
  const logo = 'aIDEAS'.split('').map((char, index) => (
    <span key={index} className="inline-block">{char}</span>
  ));

  return (
    <header className="sticky z-20 top-0 w-full bg-black border-b-2 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 🟢 Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src={i}
            alt="aIDEAS Logo"
            width={40}
            height={40}
            className="bg-white rounded-full border border-white"
          />
          <div className='className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-text bg-[length:300%]"
'>
            {logo}
          </div>
        </div>

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
