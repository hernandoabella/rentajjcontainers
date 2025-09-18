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
];

export default function TypesOfContainers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Tipos de Contenedores
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
              <div className="relative w-full h-56">
                <Image
                  src={container.image}
                  alt={container.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  priority={idx < 3} // optimiza las primeras imágenes para LCP
                />
              </div>
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
