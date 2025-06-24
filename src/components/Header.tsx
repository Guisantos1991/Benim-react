import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat flex flex-col text-white relative"
      style={{
        backgroundImage: `url('/images/homeImage.jpg')`,
      }}
      id="home"
    >
      <div className="flex w-full h-full bg-gradient-to-b from-transparent to-black items-center flex-col">
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[180px] justify-center items-center mt-2 gap-4 md:gap-0">
          <img
            src="/logo/logo1.PNG"
            alt="Logo Benim Planejados"
            className="w-28 h-16 md:w-42 md:h-26 rounded-2xl ml-0 md:ml-10 hover:w-32 hover:h-20 hover:transition-all duration-500"
          />

          <ul className="flex flex-row gap-2 md:gap-4 md:ml-auto md:mr-10 text-sm md:text-xl h-auto md:h-8 items-center mt-4 md:mt-0">
            <li>
              <a
                href="#home"
                className="font-Saira font-medium hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="font-Saira font-medium hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="font-Saira font-medium hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="font-Saira font-medium hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 w-full h-full items-center p-4 md:p-10">
          <h1 className="text-center text-3xl md:text-6xl font-Saira font-bold text-white">
            Transformando Seus Projetos Em Realidade
          </h1>
          <p className="text-center w-full md:w-[800px] font-Saira text-sm md:text-base">
            Venha conhecer e conversar com o nosso time. Vamos trabalhar juntos
            para fazer com que o seu projeto saia do papel, com qualidade e
            eficiência.
          </p>

          <div className="w-36 h-12 md:w-44 md:h-14 bg-neutral-200/40 rounded-[10px] backdrop-blur-lg flex flex-row items-center justify-center gap-2 hover:bg-neutral-300/40 hover:cursor-pointer hover:transition-all hover:duration-500">
            <div className="text-center justify-start text-white text-lg md:text-xl font-semibold font-Saira leading-loose tracking-tight">
              Orçamento Aqui!
            </div>
          </div>
        </div>
      </div>
      <div className="flex "></div>
    </motion.header>
  );
}
