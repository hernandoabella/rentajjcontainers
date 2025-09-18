"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/company1.png",
  "/logos/company2.png",
  "/logos/company3.png",
  "/logos/company4.png",
  "/logos/company5.png",
  "/logos/company6.png",
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Orgullosos de ser el proveedor de confianza para grandes empresas
        </h2>

        {/* Slider infinito */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicamos los logos para el efecto infinito */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-20 relative">
                <Image src={logo} alt={`Company ${index}`} fill className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
