import { useState } from "react";
import { ServicesData } from "../data/data";
import { motion } from "framer-motion";

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center flex-col items-center mt-20 mb-10"
      id="servicos"
    >
      <div className="mb-10 flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl font-bold text-center font-Saira">
          Nossos Serviços
        </h1>
        <p className="font-Saira text-sm">
          Confira aqui, tudo que podemos oferecer com a melhor qualidade e com
          todo carinho da nossa equipe
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-6"
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
              className="w-60 h-80 bg-contain bg-no-repeat bg-center rounded-lg shadow-md flex justify-center items-center"
              style={{ backgroundImage: `url(${service.imagem})` }}
            >
              <div className="bg-black/50 w-full h-full flex items-end p-4 text-white font-bold">
                {service.nome}
              </div>
            </div>

            {/* Descrição no hover */}
            {hoveredId === service.id && (
              <div className="absolute top-0 left-0 w-60 h-full bg-black/80 rounded-lg shadow-md flex items-center justify-center text-white p-4 text-sm text-center pointer-events-none">
                {service.descricao}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
