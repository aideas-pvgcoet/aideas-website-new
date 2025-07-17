"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Member {
  id: number;
  name: string;
  designation: string;
  image: string;
  info: string;
}

const membersData: Member[] = [
  {
    id: 1,
    name: "Atharva Ombase",
    designation: "General Secretary",
    image: "/members/gs.png", // Add images to public/members folder
    info: "Leads the association and coordinates major activities.",
  },
  {
    id: 2,
    name: "Tanvi Deshmukh",
    designation: "Joint General Secretary",
    image: "/members/jgs.png",
    info: "Supports the General Secretary and manages documentation.",
  },
  {
    id: 3,
    name: "Nishikant Toshniwal",
    designation: "Treasurer",
    image: "/members/nishi_treasurer.png",
    info: "Handles all finances and budget planning.",
  },
  {
    id: 4,
    name: "Prathamesh Kulkarni",
    designation: "Technical Team Head",
    image: "/members/pk_th.png",
    info: "Manages the website, apps, and technical events.",
  },
  {
    id: 5,
    name: "Arjun Ajit",
    designation: "Technical Team Head",
    image: "/members/aa_th.png",
    info: "Plans and executes association events successfully.",
  },
];

const Members = () => {
  return (
    <div className="min-h-screen bg-black py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {membersData.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all"
          >
            <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={500}
                    className="w-full h-110 p-4 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-blue-500 font-medium">{member.designation}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Members;
