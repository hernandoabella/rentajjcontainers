"use client";

import { motion } from "framer-motion";

const containers = [
  { name: "10 Feet Standard Container", image: "/containers/10ft-standard.jpg" },
  { name: "10 Feet Reefer Container", image: "/containers/10ft-reefer.jpg" },
  { name: "10 Feet DNV Container", image: "/containers/10ft-dnv.jpg" },
  { name: "20 Feet Standard Container", image: "/containers/20ft-standard.jpg" },
  { name: "20 Feet High Cube Container", image: "/containers/20ft-highcube.jpg" },
  { name: "20 Feet Reefer Container", image: "/containers/20ft-reefer.jpg" },
];

export default function TypesOfContainers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          TYPES OF CONTAINERS
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {containers.map((container, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={container.image}
                alt={container.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{container.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
