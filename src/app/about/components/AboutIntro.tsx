"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Texto a la izquierda */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            BoxHub Cargo Containers Trading LLC is one of the largest cargo
            container trading companies based in the Middle East. We purchase
            and sell used and brand new shipping containers for all industries.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Besides hosting a shipping container trading platform, BoxHub Cargo
            Containers also provides inspection and survey services strictly
            adhering to the rules and regulations mandated by the IICL. Our
            licensed inspectors, certified by the Institute of International
            Container Lessors (IICL), will go over the containers and the
            concerned documents with a fine-tooth comb to make them sea-ready.
          </p>
        </motion.div>

        {/* Imagen a la derecha */}
        <motion.div
          className="w-full md:w-1/2 h-72 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about-company.jpg"
            alt="BoxHub Cargo Containers"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
