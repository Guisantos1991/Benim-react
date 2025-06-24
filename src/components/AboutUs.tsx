import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center w-full h-full mt-20 mb-10"
      id="sobre"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold text-center font-Saira">Sobre Nós</h1>
        <p className="font-Saira text-sm">
          Conheça um pouco mais sobre a nossa história e valores.
        </p>
      </div>
      <div className="w-full h-126 p-10 flex flex-row items-center justify-center gap-10">
        <div
          className="w-[600px] h-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover rounded-lg"
          style={{ backgroundImage: "url('/images/TeamImage.jpg')" }}
        ></div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-start font-Saira">
            Nós somos Benim!
          </h1>
          <p className=" w-60 font-Saira text-sm text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem, cupiditate, quia delectus consequuntur dolor commodi non
            vitae nobis aut, maxime fugiat ex sunt voluptatum sint ullam debitis
            eos? Quam?
          </p>
        </div>
      </div>
      <div className="w-full h-80 p-10 flex flex-row items-center justify-center gap-10">
        <div
          className="w-full h-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-contain rounded-lg"
          style={{ backgroundImage: "url('/images/comments.png')" }}
        ></div>
        <div className="w-full h-full flex flex-col items-start justify-center gap-8">
          <h1 className="text-4xl font-bold text-start font-Saira">
            O que nossos clientes dizem
          </h1>
          <p className="font-Saira text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem, cupiditate, quia delectus consequuntur dolor commodi non
          </p>
        </div>
      </div>
    </motion.div>
  );
}
