import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center w-full h-auto md:h-full mt-10 md:mt-20 mb-6 md:mb-10"
      id="sobre"
    >
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 md:gap-0">
        <h1 className="text-2xl md:text-4xl font-bold text-center font-Saira">Sobre Nós</h1>
        <p className="font-Saira text-xs md:text-sm text-center">
          Conheça um pouco mais sobre a nossa história e valores.
        </p>
      </div>
      <div className="w-full h-auto md:h-126 p-2 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <div
          className="w-full md:w-[600px] h-40 md:h-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-contain md:bg-cover rounded-lg mb-4 md:mb-0"
          style={{ backgroundImage: "url('/images/TeamImage.jpg')" }}
        ></div>
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start font-Saira">
            Nós somos Benim!
          </h1>
          <p className="w-full md:w-60 font-Saira text-xs md:text-sm text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem, cupiditate, quia delectus consequuntur dolor commodi non
            vitae nobis aut, maxime fugiat ex sunt voluptatum sint ullam debitis
            eos? Quam?
          </p>
        </div>
      </div>
      <div className="w-full h-auto md:h-80 p-2 md:p-10 flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10">
        <div
          className="w-full h-40 md:h-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-contain md:bg-contain rounded-lg mb-4 md:mb-0"
          style={{ backgroundImage: "url('/images/comments.png')" }}
        ></div>
        <div
          className="w-full h-full flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 text-center md:text-left"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start font-Saira">
            O que nossos clientes dizem
          </h1>
          <p className="font-Saira text-xs md:text-sm text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem, cupiditate, quia delectus consequuntur dolor commodi non
          </p>
        </div>
      </div>
    </motion.div>
  );
}
