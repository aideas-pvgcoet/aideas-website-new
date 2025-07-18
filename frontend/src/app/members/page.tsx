"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface Member {
  id: number;
  name: string;
  designation: string;
  image: string;
  info: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
}

const membersData: Member[] = [
    {
    id: 1,
    name: "Atharva Ombase",
    designation: "General Secretary",
    image: "/members/gs.png",
    info: "Leads the association and coordinates major activities.",
    instagram: "https://instagram.com/atharvaombase",
    linkedin: "https://linkedin.com/in/atharvaombase",
    email: "atharva@example.com",
  },
  {
    id: 2,
    name: "Tanvi Deshmukh",
    designation: "Joint General Secretary",
    image: "/members/jgs.png",
    info: "Supports the General Secretary and manages documentation.",
    instagram: "https://instagram.com/tanvideshmukh",
    linkedin: "https://linkedin.com/in/tanvideshmukh",
    email: "tanvi@example.com",
  },
  {
    id: 3,
    name: "Nishikant Toshniwal",
    designation: "Treasurer",
    image: "/members/nishi_treasurer.png",
    info: "Handles all finances and budget planning.",
    instagram: "https://instagram.com/nishikant",
    linkedin: "https://linkedin.com/in/nishikant",
    email: "nishikant@example.com",
  },
  {
    id: 4,
    name: "Pranav Gugale",
    designation: "Treasurer",
    image: "/members/pranav_treas.png",
    info: "Handles all finances and budget planning.",
    instagram: "https://instagram.com/pranavgugale",
    linkedin: "https://linkedin.com/in/pranavgugale",
    email: "pranav@example.com",
  },
  {
    id: 5,
    name: "Prathamesh Kulkarni",
    designation: "Technical Team Head",
    image: "/members/pk_th.png",
    info: "Manages the website, apps, and technical events.",
    instagram: "https://instagram.com/prathameshk",
    linkedin: "https://linkedin.com/in/prathameshk",
    email: "prathamesh@example.com",
  },
  {
    id: 6,
    name: "Arjun Ajit",
    designation: "Technical Team Head",
    image: "/members/aa_th.png",
    info: "Manages the website, apps, and technical events.",
    instagram: "https://instagram.com/arjunajit",
    linkedin: "https://linkedin.com/in/arjunajit",
    email: "arjun@example.com",
  },
  {
    id: 7,
    name: "Pranshu Devahde",
    designation: "Event Manager",
    image: "/members/pranshu_em.png",
    info: "Plans and executes association events successfully.",
    instagram: "https://instagram.com/pranshudevahde",
    linkedin: "https://linkedin.com/in/pranshudevahde",
    email: "pranshu@example.com",
  },
  {
    id: 8,
    name: "Anvi Kore",
    designation: "Event Manager",
    image: "/members/anvi_event.png",
    info: "Plans and executes association events successfully.",
    instagram: "https://instagram.com/anvikore",
    linkedin: "https://linkedin.com/in/anvikore",
    email: "anvi@example.com",
  },
  {
    id: 9,
    name: "Sanket Dahotre",
    designation: "Design Head",
    image: "/members/sanket_desig.png",
    info: "Designs visuals and graphics for events.",
    instagram: "https://instagram.com/sanketdahotre",
    linkedin: "https://linkedin.com/in/sanketdahotre",
    email: "sanket@example.com",
  },
  {
    id: 10,
    name: "Kinjal Baviskar",
    designation: "Design Head",
    image: "/members/kinjal_desig.png",
    info: "Designs visuals and graphics for events.",
    instagram: "https://instagram.com/kinjalbaviskar",
    linkedin: "https://linkedin.com/in/kinjalbaviskar",
    email: "kinjal@example.com",
  },
  {
    id: 11,
    name: "Atharva Joshi",
    designation: "Media Head",
    image: "/members/atharva_mediahead.png",
    info: "Handles media and publicity for the association.",
    instagram: "https://instagram.com/atharvajoshi",
    linkedin: "https://linkedin.com/in/atharvajoshi",
    email: "atharva@example.com",
  },
  {
    id: 12,
    name: "Kush Koul",
    designation: "Marketing Head",
    image: "/members/kush_marketing.png",
    info: "Leads marketing campaigns and promotions.",
    instagram: "https://instagram.com/kushkoul",
    linkedin: "https://linkedin.com/in/kushkoul",
    email: "kush@example.com",
  },
  {
    id: 13,
    name: "Manish Divate",
    designation: "Marketing Co-Head",
    image: "/members/manish_marketing_cohead.png",
    info: "Assists in marketing initiatives and outreach.",
    instagram: "https://instagram.com/manishdivate",
    linkedin: "https://linkedin.com/in/manishdivate",
    email: "manish@example.com",
  },
  {
    id: 14,
    name: "Priti Patil",
    designation: "Editorial Head",
    image: "/members/priti_edito.png",
    info: "Creates and manages editorial content.",
    instagram: "https://instagram.com/pritipatil",
    linkedin: "https://linkedin.com/in/pritipatil",
    email: "priti@example.com",
  },
];

const MemberCard = ({ member, isMobile }: { member: Member; isMobile: boolean }) => {
  const controls = useAnimation();

  return (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      onViewportEnter={() => {
        if (isMobile) {
          controls.start({
            boxShadow: "0 0 20px #0ff",
            transition: { duration: 0.5 },
          });
        }
      }}
      onViewportLeave={() => {
        if (isMobile) {
          controls.start({
            boxShadow: "0 0 0px transparent",
            transition: { duration: 0.5 },
          });
        }
      }}
      animate={controls}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="bg-black/60 border border-fuchsia-700 rounded-2xl overflow-hidden 
        md:shadow-none
        md:hover:scale-105 md:hover:border-cyan-400 md:hover:shadow-[0_0_20px_#0ff] 
        transition-all duration-300"
    >
      <Image
        src={member.image}
        alt={member.name}
        width={600}
        height={500}
        className="w-full h-110 p-4 object-cover"
      />
      <div className="p-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-400 transition-colors duration-300"
        >
          {member.name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg text-fuchsia-400 font-medium hover:text-pink-500 transition-colors duration-300"
        >
          {member.designation}
        </motion.p>
        <p className="text-gray-300 mt-2 text-sm">{member.info}</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-3">
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-300 transition-transform duration-300 hover:scale-125"
            >
              <FaInstagram size={25} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin size={25} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-gray-300 hover:text-gray-100 transition-transform duration-300 hover:scale-125"
            >
              <FaEnvelope size={25} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Members = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-black py-10 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] animate-[moveStars_50s_linear_infinite]"></div>
        <style jsx>{`
          @keyframes moveStars {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 1000px 1000px;
            }
          }
        `}</style>
      </div>

      <h1 className="relative z-10 text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-lg">
        Our Team
      </h1>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {membersData.map((member) => (
          <MemberCard key={member.id} member={member} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default Members;
