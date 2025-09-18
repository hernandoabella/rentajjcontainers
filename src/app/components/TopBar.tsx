// components/TopBar.tsx
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-black text-white text-sm px-6 py-2 flex justify-between items-center">
      {/* Lado izquierdo */}
      <div className="flex gap-6">
        <span>📞 +57 310 404 0273</span>
        <span>✉️ gerencia@rentacontainersjj.com</span>
      </div>

      {/* Lado derecho */}
      <div className="flex gap-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={16} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaFacebookF size={16} />
        </a>
      </div>
    </div>
  );
}
