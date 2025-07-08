'use client';

import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 Z-0">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Contact Us</h1>
        <p className="text-gray-300 mb-12">
          Have a question, suggestion, or want to collaborate? Reach out to us through the form below or connect on social media.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-6 text-left">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 bg-zinc-800 text-white border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition w-full md:w-fit mx-auto"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-2xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:yourmail@aideas.com"
            className="hover:text-white"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </main>
  );
}
