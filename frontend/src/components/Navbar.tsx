'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const[isOpen,setIsOpen]=useState(false);
    const toggleMenu=()=>setIsOpen(!isOpen)
    
    return (
    <header className="w-full bg-black text-white px-6 py-4 Z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo aligned to left */}
        <h1 className="text-3xl font-bold text-blue-600">aideas</h1>
          {/* Mobile menu toggle button */}
<button className="md:hidden focus:outline-none" onClick={toggleMenu}>
    {isOpen ? <FaTimes /> : <FaBars />}
</button>

        {/* Navigation Links aligned to right */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">about</Link>
          <Link href="/sessions">Sessions</Link>
          <Link href="/members">Members</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
      {isOpen && (
  <div className="absolute top-16 right-0 w-1/2 z-50 bg-black px-6 py-4 flex flex-col items-center space-y-4 text-sm border-t border-zinc-700">
    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
    <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
    <Link href="/sessions" onClick={() => setIsOpen(false)}>Sessions</Link>
    <Link href="/members" onClick={() => setIsOpen(false)}>Members</Link>
    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
  </div>
)}


    </header>
  );
}
