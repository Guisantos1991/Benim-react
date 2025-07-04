import { useRef } from "react";
import { motion } from "framer-motion";

export default function MidService() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row w-full max-w-full md:max-w-[1280px] mx-auto h-auto md:h-[400px] items-center justify-between px-2 md:px-10 gap-4 md:gap-10 mt-28"
    >
      <div className="flex flex-col justify-center w-full md:w-1/3 h-auto md:h-full p-2 md:p-4 font-Saira mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Nossos Ambientes</h2>
        <p className="text-base md:text-lg text-gray-700">
          Explore os ambientes projetados com cuidado. Cada detalhe reflete
          nosso compromisso com qualidade e estilo.
        </p>
      </div>

      <div className="flex flex-col w-full md:w-2/3 h-auto md:h-full items-center gap-2 md:gap-4">
        <div className="flex gap-2 md:gap-4">
          <button onClick={scrollLeft} className="p-2 md:p-2">
            <img
              src="/logo/chrevon-left.svg"
              alt="Seta"
              className="w-8 h-8 md:w-[35px] md:h-[35px]"
            />
          </button>
          <button onClick={scrollRight} className="p-2 md:p-2">
            <img
              src="/logo/chrevon-right.svg"
              alt="Seta"
              className="w-8 h-8 md:w-[35px] md:h-[35px]"
            />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-4 overflow-x-auto w-full h-48 md:h-[280px] scroll-smooth no-scrollbar"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="w-44 md:w-60 h-48 md:h-full rounded-xl bg-cover bg-center bg-no-repeat flex items-end justify-center text-white font-bold text-lg md:text-xl p-2 md:p-4 flex-shrink-0"
              style={{
                backgroundImage: `url('/images/ambiente-${i}.jpg')`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
