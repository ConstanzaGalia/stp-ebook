import React from 'react'
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section
      className="px-6 py-20 bg-[#00B3AC] text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-6">🚀 Unite a STP Academy</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Estás a un paso de convertirte en el entrenador que siempre quisiste ser. Formación, comunidad y tecnología en un solo lugar.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Podés agregar un botón de inscripción o contacto aquí */}
      </div>
    </motion.section>
  );
};

export default CTASection;
