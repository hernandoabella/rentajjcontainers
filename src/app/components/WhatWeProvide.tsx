"use client";

import { motion } from "framer-motion";
import { FaBoxOpen, FaTools, FaGlobe, FaHome } from "react-icons/fa";

const services = [
  {
    title: "Comercio de Contenedores",
    description:
      "En RENTAJJ CONTAINERS ofrecemos una amplia gama de contenedores marítimos de alta calidad para la venta y satisfacer tus diversas necesidades.",
    icon: FaBoxOpen,
  },
  {
    title: "Conversiones de Contenedores",
    description:
      "RENTAJJ CONTAINERS brinda servicios de conversión y modificación de contenedores de primera categoría. Nuestro equipo profesional incluye arquitectos, técnicos en AutoCAD y mano de obra especializada. Usamos métodos avanzados de prefabricación para transformar contenedores.",
    icon: FaTools,
  },
  {
    title: "Arrendamiento Internacional",
    description:
      "Contamos con más de 1000 contenedores para alquiler nacional e internacional a corto y largo plazo, incluyendo tanto contenedores secos como refrigerados.",
    icon: FaGlobe,
  },
  {
    title: "Arrendamiento Doméstico",
    description:
      "Ofrecemos contenedores en alquiler para clientes dentro de los Emiratos Árabes Unidos. Nuestra división de arrendamiento doméstico dispone de la mayor flota de contenedores con impuestos de aduana pagados para cubrir todo tipo de requerimientos.",
    icon: FaHome,
  },
];

export default function WhatWeProvide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          LO QUE OFRECEMOS
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <service.icon className="w-10 h-10 text-teal-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
