"use client";

import { motion } from "framer-motion";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenedor del contenido */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl px-4">
        {/* Texto principal */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-3xl md:text-5xl font-bold text-center md:text-left max-w-lg"
        >
          LÍDER EN LA VENTA DE CONTENEDORES MARÍTIMOS
        </motion.h1>

        {/* Formulario de cotización */}
        <QuoteForm />
      </div>
    </section>
  );
}
