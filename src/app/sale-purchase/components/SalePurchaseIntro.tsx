"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SalePurchaseIntro() {
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
          Container Buying & Selling in Dubai
        </h2>
        <p className="text-gray-600 leading-relaxed">
          BOX HUB sell new and used containers for its container trading division. 
          This division mainly sells container equipment in Middle East, especially Dubai & Saudi Arabia. 
          BOX HUB sells Dry containers 20ft STD, 40ft STD and 40ft high cube. 
          We also specialize in selling special equipment containers such as open top, flat-rack, and refrigerated marine containers.
        </p>
        <p className="text-gray-600 leading-relaxed">
          BOX HUB has an extensive network of depot facilities in all the Middle East countries to ensure customers 
          can purchase containers with maximum flexibility and in a timely manner. 
          BOX HUB cooperates with a wide range of international container suppliers to ensure maximum container availability 
          in your desired locations.
        </p>
        <p className="text-gray-600 leading-relaxed">
          BOX HUB ensures that the containers we provide are suitable for domestic storage purposes 
          or for national and international transportation. 
          Equipment will be delivered with a valid CSC plate certification 
          in order to ensure safe transportation by train, vessel, or truck.
        </p>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="md:w-1/2 relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/sale-intro.jpg"
          alt="Sale & Purchase Containers"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
