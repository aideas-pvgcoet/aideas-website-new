import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">aIDEAS</h2>
          <p className="text-sm">© {new Date().getFullYear()} Aideas Association. All rights reserved.</p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-sm mb-4 md:mb-0">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/events" className="hover:text-white">Events</a>
          <a href="/projects" className="hover:text-white">Projects</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:yourmail@aideas.com"
            aria-label="Email"
            className="hover:text-white"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
