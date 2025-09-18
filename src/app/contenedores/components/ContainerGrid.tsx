"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containers = [
  { name: "Contenedor Estándar de 10 Pies", image: "/containers/10ft-standard.jpg" },
  { name: "Contenedor Reefer de 10 Pies", image: "/containers/10ft-reefer.jpg" },
  { name: "Contenedor DNV de 10 Pies", image: "/containers/10ft-dnv.jpg" },
  { name: "Contenedor Estándar de 20 Pies", image: "/containers/20ft-standard.jpg" },
  { name: "Contenedor High Cube de 20 Pies", image: "/containers/20ft-highcube.jpg" },
  { name: "Contenedor Reefer de 20 Pies", image: "/containers/20ft-reefer.jpg" },
  { name: "Contenedor Open-Top de 20 Pies", image: "/containers/20ft-opentop.jpg" },
  { name: "Contenedor Flat Rack de 20 Pies", image: "/containers/20ft-flatrack.jpg" },
  { name: "Contenedor Open Side de 20 Pies", image: "/containers/20ft-openside.jpg" },
  { name: "Contenedor DNV Offshore de 20 Pies", image: "/containers/20ft-dnv-offshore.jpg" },
  { name: "Contenedor Open-Top Offshore de 20 Pies", image: "/containers/20ft-opentop-offshore.jpg" },
  { name: "Contenedor Estándar de 40 Pies", image: "/containers/40ft-standard.jpg" },
  { name: "Contenedor High Cube de 40 Pies", image: "/containers/40ft-high.jpg" },
  { name: "Contenedor High Cube Reefer de 40 Pies", image: "/containers/40ft-highcube-e.jpg" },
  { name: "Contenedor Open-Top de 40 Pies", image: "/containers/40ft-opentop.jpg" },
  { name: "Contenedor Flat Rack de 40 Pies", image: "/containers/40ft-flatrack.jpg" },
  { name: "Contenedor Open Side de 40 Pies", image: "/containers/40ft-openside.jpg" },
  { name: "Contenedor High Cube de 45 Pies", image: "/containers/45ft-highcube.jpg" },
];

export default function ContainersGrid() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Tipos de Contenedores
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {containers.map((container, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={container.image}
                alt={container.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {container.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
