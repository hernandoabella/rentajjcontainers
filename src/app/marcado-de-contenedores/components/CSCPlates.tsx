"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CSCPlates() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Texto */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          ¿Qué son las placas CSC?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          La Convención Internacional para la Seguridad de los Contenedores (CSC), llevada a cabo en 1972 por la ONU y la Organización Marítima Internacional, estableció regulaciones que formalizan los requisitos internacionales de seguridad para la inspección y mantenimiento de contenedores de carga.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Los principales objetivos de la CSC son:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Seguir las instrucciones necesarias para garantizar la seguridad de la vida humana durante el transporte y manejo de contenedores.</li>
          <li>Establecer regulaciones de seguridad uniformes a nivel internacional en los países adoptantes de la CSC (partes contratantes).</li>
          <li>Delegar generalmente a organizaciones autorizadas las tareas de prueba, inspección y aprobación de contenedores para permitir su navegación internacional.</li>
        </ul>
      </motion.div>

      {/* Imagen derecha */}
      <motion.div
        className="md:w-1/2 relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/containers/placa-csc.jpg"
          alt="CSC Plates"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
