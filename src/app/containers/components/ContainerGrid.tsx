"use client";

import { motion } from "framer-motion";

const containers = [
  { name: "10 Feet Standard Container", image: "/containers/10ft-standard.jpg" },
  { name: "10 Feet Reefer Container", image: "/containers/10ft-reefer.jpg" },
  { name: "10 Feet DNV Container", image: "/containers/10ft-dnv.jpg" },
  { name: "20-Feet Standard Container", image: "/containers/20ft-standard.jpg" },
  { name: "20-Feet High Cube Container", image: "/containers/20ft-highcube.jpg" },
  { name: "20 Feet Reefer Container", image: "/containers/20ft-reefer.jpg" },
  { name: "20 Feet Open-Top Container", image: "/containers/20ft-opentop.jpg" },
  { name: "20 Feet Flat Rack Container", image: "/containers/20ft-flatrack.jpg" },
  { name: "20ft Open Side Container", image: "/containers/20ft-openside.jpg" },
  { name: "20-Feet DNV Offshore Container", image: "/containers/20ft-dnv-offshore.jpg" },
  { name: "20-Feet Open Top Offshore Container", image: "/containers/20ft-opentop-offshore.jpg" },
  { name: "40 Feet Standard Container", image: "/containers/40ft-standard.jpg" },
  { name: "40-Feet High Cube Container", image: "/containers/40ft-highcube.jpg" },
  { name: "40 Feet High Cube Reefer Container", image: "/containers/40ft-highcube-reefer.jpg" },
  { name: "40 Feet Open-Top Container", image: "/containers/40ft-opentop.jpg" },
  { name: "40 Feet Flat Rack Container", image: "/containers/40ft-flatrack.jpg" },
  { name: "40-Feet Open Side Container", image: "/containers/40ft-openside.jpg" },
  { name: "45 Feet High Cube Container", image: "/containers/45ft-highcube.jpg" },
];

export default function ContainersGrid() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Tipos de Contenedores
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {containers.map((container, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
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
    </section>
  );
}
