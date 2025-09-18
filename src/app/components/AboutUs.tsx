"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Imagen */}
        <motion.div
          className="w-full md:w-1/2 h-64 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/about-us.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 mb-4">
            En RENTAJJ CONTAINERS nos dedicamos a ofrecer soluciones de
            almacenamiento y transporte de contenedores marítimos de la más
            alta calidad. Nuestro equipo se compromete a brindar productos
            confiables, innovadores y adaptados a las necesidades de cada
            cliente.
          </p>
          <p className="text-gray-600">
            Con años de experiencia en la industria, somos el socio de confianza
            para empresas que buscan eficiencia, seguridad y versatilidad en
            sus operaciones.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
