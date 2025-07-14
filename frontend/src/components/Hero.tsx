'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/components/image.jpeg'; // Adjust path if needed

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen bg-black text-white overflow-hidden">
      {/* 🌈 Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.2, scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80vw] h-[80vw] bg-purple-600 rounded-full filter blur-2xl top-[10%] left-[10%]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.2, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[100vw] h-[100vw] bg-blue-500 rounded-full filter blur-3xl top-[50%] left-[20%]"
        />
      </div>

      {/* 🧠 Hero Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center min-h-[70vh] sm:min-h-screen px-4 sm:px-12 md:px-20 max-w-7xl mx-auto gap-4 sm:gap-8">
   
        {/* 📝 Text Section */}
        <div className="text-center lg:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500"
          >
            Welcome to aIDEAS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mt-2 sm:mt-6"
          >
            Igniting minds. Innovating futures. Exploring the realm of Artificial Intelligence and Data Science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="mt-4 sm:mt-8"
          >
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
              Explore Now
            </button>
          </motion.div>
        </div>

        {/* 🖼️ Animated Image Section */}
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
