"use client";

import Image from "next/image";
import Link from "next/link"; // 👈 Importa Link
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1 */}
        <div>
          <Image
            src="/logo2.png"
            alt="Logo"
            width={150}
            height={150}
            className="mb-4"
          />
          <p className="mb-4 text-sm">
            RENTAJJ Containers es una compañía especializada en la venta,
            compra y conversión de contenedores. Ofrecemos soluciones confiables
            y eficientes para el manejo de carga en todo el mundo.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-white">Sobre Nosotros</Link></li>
            <li><Link href="/venta-y-compra" className="hover:text-white">Venta y Compra</Link></li>
            <li><Link href="/marcado-de-contenedores" className="hover:text-white">Marcado de Contenedores</Link></li>
            <li><Link href="/contenedores" className="hover:text-white">Contenedores</Link></li>
            <li><Link href="/conversion-de-contenedores" className="hover:text-white">Conversión de Contenedores</Link></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <div>Gerencia</div>
            <li>gerencia@rentacontainersjj.com</li>
            <div>Contabilidad</div>
            <li>contabilidad@rentacontainersjj.com</li>
            <div>Asistente Administrativo</div>
            <li>asistente.administrativa@rentacontainersjj.com</li>
            <div>Asesor Comercial</div>
            <li>asesorcomercial@rentacontainersjj.com</li>
            <li>+57 310 404 0273, +57 310 562 7230</li>
            <li>
              Calle 69 No. Via 40 - 431 - Barranquilla, Atlántico
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center text-sm px-6">
        <span>© 2025 RENTAJJ CONTAINERS. Todos los derechos reservados.</span>
        <button
          onClick={scrollToTop}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
