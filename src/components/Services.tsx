import { useState } from "react";
import { ServicesData } from "../data/data";
import { motion } from "framer-motion";

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center flex-col items-center mt-10 md:mt-20 mb-6 md:mb-10"
      id="servicos"
    >
      <div className="mb-6 md:mb-10 flex justify-center items-center flex-col gap-2 md:gap-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center font-Saira">
          Nossos Serviços
        </h1>
        <p className="font-Saira text-xs md:text-sm text-center">
          Confira aqui, tudo que podemos oferecer com a melhor qualidade e com
          todo carinho da nossa equipe
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-20 p-2 md:p-6 w-full max-w-5xl"
        id="servicesArea"
      >
        {ServicesData.map((service) => (
          <div
            key={service.id}
            className="relative"
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Card do Serviço */}
            <div
              className="w-full max-w-xs md:w-60 h-48 md:h-80 bg-contain bg-no-repeat bg-center rounded-lg shadow-md flex justify-center items-center mx-auto"
              style={{ backgroundImage: `url(${service.imagem})` }}
            >
              <div className="bg-black/50 w-full h-full flex items-end p-2 md:p-4 text-white font-bold text-base md:text-xl">
                {service.nome}
              </div>
            </div>

            {/* Descrição no hover */}
            {hoveredId === service.id && (
              <div className="absolute top-0 left-0 w-full h-full bg-black/80 rounded-lg shadow-md flex items-center justify-center text-white p-2 md:p-4 text-xs md:text-sm text-center pointer-events-none">
                {service.descricao}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
