'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/components/image.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen bg-black text-white overflow-hidden">
      {/* 🌈 Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.3,
            scale: [1, 1.15, 1],
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[90vw] h-[90vw] bg-purple-600 rounded-full filter blur-2xl top-[5%] left-[5%] z-0"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.3,
            scale: [1, 1.25, 1],
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[110vw] h-[110vw] bg-sky-500 rounded-full filter blur-3xl top-[40%] left-[25%] z-0"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center min-h-[70vh] sm:min-h-screen px-4 sm:px-12 md:px-20 max-w-7xl mx-auto gap-8">
        
        {/* 📝 Text Section */}
        <div className="text-center lg:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500"
          >
            Welcome to aIDEAS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-300"
          >
            Igniting minds. Innovating futures. Exploring the realm of Artificial Intelligence and Data Science.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl pt-4 text-gray-300"
          >
            Empowering&nbsp;
            <span className="text-sky-400 font-semibold">
              <Typewriter
                words={["Creativity", "Innovation", "Collaboration", "Future Leaders"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.8 }}
            className="mt-6 text-center lg:text-left"
          >
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
              Explore Now
            </button>
          </motion.div>
        </div>

        {/* 🧠 Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="max-w-[360px] sm:max-w-[400px] md:max-w-[550px] w-full mx-auto"
        >
          <Image
            src={Logo}
            alt="aIDEAS logo"
            className="rounded-xl shadow-2xl max-h-[220px] sm:max-h-none"
            priority
            height={800}
            width={800}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
