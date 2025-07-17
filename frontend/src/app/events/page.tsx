"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import EventCard from "@/components/EventCard";
import { motion } from "framer-motion";

const events = [ 
  {
    title: "Avinya",
    date: "5th May 2023",
    description: "Introduction to cybersecurity principles.",
    image: "/Avinya.png",
  },
  {
    title: "Murder Mystery",
    date: "5th May 2023",
    description: "Introduction to cybersecurity principles.",
    image: "/mystry.png",
  },

  {
    title: "Tug of War",
    date: "5th May 2023",
    description: "Introduction to cybersecurity principles.",
    image: "/war.png",
  },
   {
    title: "Escape Room",
    date: "5th May 2023",
    description: "Introduction to cybersecurity principles.",
    image: "/Room.png",
  },
   {
    title: "Savalation Army Visit",
    date: "18th Oct 2023",
    description: "Introduction to cybersecurity principles.",
    image: "/army.png",
  },
  {
    title: "Masterchef PVG",
    date: "17th Oct 2023",
    description: "Competition of making food.",
    image: "/vlog.JPG",
  },
  {
    title: "Googler",
    date: "17th Oct 2023",
    description: "Talk by industry experts on AI future.",
    image: "/Goo.JPG",
  },
  {
    title: "Flip the Code",
    date: "5th Jan 2024",
    description: "Annual summit on data science trends.",
    image: "/FLIP.jpg",
  },
  {
    title: "Code Clash",
    date: "2nd April 2025",
    description: "Solving the coding question.",
    image: "/code.png",
  },
];

export default function EventsPage() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto">
  <h1 className="page-title text-3xl sm:text-5xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent">

Our Past Events 

</h1>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 shadow-2xl">
    {events.map((event, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <EventCard {...event} />
      </motion.div>
    ))}
  </div>
</main>

  );
}
