"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function EventCard({ title, date, description, image }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-81 object-cover p-1 rounded-2xl"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
