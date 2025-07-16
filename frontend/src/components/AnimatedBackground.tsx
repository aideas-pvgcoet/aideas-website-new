'use client';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.3,
          scale: [1, 1.15, 1],
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[110vw] h-[110vw] bg-sky-500 rounded-full filter blur-3xl top-[40%] left-[25%] z-0"
      />
    </div>
  );
};

export default AnimatedBackground;
