'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/components/image.jpeg'; // Adjust the path if needed

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen bg-black text-white overflow-hidden">
      {/* 🌈 Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute w-[60vw] h-[60vw] bg-purple-600 rounded-full filter blur-3xl top-[5%] left-[5%] hidden sm:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute w-[70vw] h-[70vw] bg-blue-500 rounded-full filter blur-2xl top-[40%] left-[30%] hidden sm:block"
        />
      </div>

      {/* 🧠 Hero Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] sm:min-h-screen px-6 sm:px-12 md:px-20 max-w-7xl mx-auto gap-0 sm:gap-8">
        {/* 📝 Text Section */}
        <div className="text-center lg:text-left max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500"
          >
            Welcome to aIDEAS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300"
          >
            Igniting minds. Innovating futures. Exploring the realm of Artificial Intelligence and Data Science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="mt-8"
          >
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
              Explore Now
            </button>
          </motion.div>
        </div>

        {/* 🖼️ Image Section */}
        <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[450px] w-full mx-auto">
          <Image
            src={Logo}
            alt="aIDEAS logo"
            className="w-full h-auto rounded-xl shadow-2xl max-h-[250px] sm:max-h-none"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
