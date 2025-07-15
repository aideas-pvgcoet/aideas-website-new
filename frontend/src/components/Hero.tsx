'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '@/components/image.jpeg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen bg-black text-white overflow-hidden">
      {/* 🌈 Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
  initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
  animate={{ 
    opacity: 0.3, 
    scale: [1, 1.15, 1], 
    x: [0, 20, -20, 0], 
    y: [0, -20, 20, 0] 
  }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  className="absolute w-[90vw] h-[90vw] bg-purple-600 rounded-full filter blur-2xl top-[5%] left-[5%] z-0"
/>

<motion.div
  initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
  animate={{ 
    opacity: 0.3, 
    scale: [1, 1.25, 1], 
    x: [0, -30, 30, 0], 
    y: [0, 30, -30, 0] 
  }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  className="absolute w-[110vw] h-[110vw] bg-sky-500 rounded-full filter blur-3xl top-[40%] left-[25%] z-0"
/>

      </div>

      {/* 🧠 Hero Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center min-h-[70vh] sm:min-h-screen px-4 sm:px-12 md:px-20 max-w-7xl mx-auto gap-4 sm:gap-8">
        {/* 📝 Text Section */}
        <div className="text-center lg:text-left max-w-xl">
       <div className="flex flex-wrap justify-center lg:justify-start pt-3 gap-2">
  {"Welcome to aIDEAS".split(" ").map((word, wordIndex) => (
    <span key={wordIndex} className="flex">
      {word.split("").map((char, charIndex) => (
        <motion.span
          key={charIndex}
          initial={{ y: 40, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.05 * (wordIndex * 8 + charIndex), type: "spring", stiffness: 100 }}
          className="text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500"
        >
          {char}
        </motion.span>
      ))}
      {/* space between words */}
      <span className="w-2" />
    </span>
  ))}
</div>


<div className="flex flex-wrap justify-center text-center max-w-xl mx-auto">
  {"Igniting minds. Innovating futures. Exploring "
    .split("")
    .map((char, index) => (
      <motion.span
        key={index}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.04 * index, type: 'spring', stiffness: 80 }}
        className="pt-2 text-base sm:text-lg md:text-xl text-gray-300"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
</div>

<div className="flex flex-wrap justify-center text-center max-w-xl mx-auto">
  {" the realme of Artificial Intelligence and Data Science."
    .split("")
    .map((char, index) => (
      <motion.span
        key={index}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.04 * index, type: 'spring', stiffness: 80 }}
        className="pt-2 text-base sm:text-lg md:text-xl text-gray-300"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
</div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.3, delay: 1.5 }} // Delayed till most of text is done
  className="mt-4 sm:mt-8 text-center"
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