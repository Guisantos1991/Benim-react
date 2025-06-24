import { motion } from "framer-motion";

export default function MiddleBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-start w-full h-32 md:h-44 static md:absolute mt-2.5 md:mt-[-50px]"
    >
      <div className="flex flex-col md:flex-row justify-around items-center w-full md:w-9/12 h-auto md:h-30 bg-primary rounded-xl p-2 md:p-0 gap-2 md:gap-0">
        <div className="flex flex-col gap-1 w-full md:w-36 items-center justify-center">
          <h1 className="text-white text-base md:text-1xl font-bold text-center font-Saira">
            Montagem Grátis
          </h1>
        </div>
        <div className="flex flex-col md:border-r-2 md:border-l-2 border-white w-full md:w-58 items-center justify-center py-2 md:py-0">
          <h1 className="text-white text-base md:text-1xl font-bold text-center font-Saira p-1 md:p-3">
            Orçamento Rápido
          </h1>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-36 items-center justify-center">
          <h1 className="text-white text-base md:text-1xl font-bold text-center font-Saira">
            Parcele Até 5x!
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
