"use client";

import Image from "next/image";

interface ContainerCardProps {
  condition: string;
  title: string;
  price: string;
}

const containers = [
  {
    condition: "Usado",
    title: "Contenedor De 20ft Standard",
    price: "9.443.263,00$",
  },
  {
    condition: "Usado",
    title: "Contenedor De 40ft Standard",
    price: "11.854.309,00$",
  },
  {
    condition: "Usado",
    title: "Contenedor De 40ft High Cube",
    price: "12.055.230,00$",
  },
  {
    condition: "Nuevo",
    title: "Contenedor de 20ft High Cube",
    price: "16.289.840,00$",
  },
];

export default function ContainersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contenedores de almacenamiento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desliza para conocer el precio de nuestros contenedores y obtener
            una cotización rápida. Los valores pueden diferir según la ubicación
            y están sujetos a cambios por la TRM.
          </p>
        </div>

        {/* Grid de contenedores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {containers.map((container, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start"
            >
              <span className="text-sm font-semibold text-green-600 mb-2">
                {container.condition}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {container.title}
              </h3>
              <p className="text-gray-700 mb-1">Precio</p>
              <p className="text-xl font-bold text-gray-900 mb-2">
                {container.price}
              </p>
              <p className="text-gray-500 text-sm">Impuesto excluido</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
