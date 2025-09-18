"use client";

import { motion } from "framer-motion";
import { FaBox, FaHandshake, FaUsers, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "QUALITY PRODUCTS",
    description:
      "We are one of the largest sellers and purchasers of every kind of used and new equipment.",
    icon: <FaBox className="text-4xl mb-4" />,
    bg: "bg-blue-600",
  },
  {
    title: "TRUSTED SALES",
    description:
      "We have the experience and expertise to ensure that our customers have the benefits.",
    icon: <FaHandshake className="text-4xl mb-4" />,
    bg: "bg-green-600",
  },
  {
    title: "PROFESSIONAL TEAM",
    description:
      "We have a dedicated and efficient team of professionals, fully conversant with all aspects of containers.",
    icon: <FaUsers className="text-4xl mb-4" />,
    bg: "bg-yellow-500",
  },
  {
    title: "CUSTOMER SUPPORT",
    description: "Just let us know your needs.",
    icon: <FaHeadset className="text-4xl mb-4" />,
    bg: "bg-red-600",
  },
];

export default function AboutFeatures() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`${feature.bg} text-white p-10 flex flex-col items-center text-center`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
