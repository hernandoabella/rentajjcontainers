"use client";

import Image from "next/image";
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
            src="/logo.jpeg"
            alt="Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <p className="mb-4 text-sm">
            BoxHub Cargo Containers es una compañía especializada en la venta,
            compra y conversión de contenedores. Ofrecemos soluciones confiables
            y eficientes para el manejo de carga en todo el mundo.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
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
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/sale-purchase" className="hover:text-white">Sale & Purchase</a></li>
            <li><a href="/marking" className="hover:text-white">Marking of Containers</a></li>
            <li><a href="/containers" className="hover:text-white">Containers</a></li>
            <li><a href="/conversion" className="hover:text-white">Container Conversion</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="tel:+971545179279" className="hover:text-white">+971 545 179 279</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>sales@boxhubcargocontainers.com</li>
            <li>admin@boxhubcargocontainers.com</li>
            <li>+971 545 179 279, +971 434 36794</li>
            <li>
              Office No: 107 Dubai National Insurance P.S.C Bldg <br />
              Near to Tesla, Sheikh Zayed Road <br />
              Dubai-UAE
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center text-sm px-6">
        <span>© 2025 RENTAJJ CONTAINERS. All rights reserved.</span>
        <button
          onClick={scrollToTop}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        >
          Ir al cielo ↑
        </button>
      </div>
    </footer>
  );
}
