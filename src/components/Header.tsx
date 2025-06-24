import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex flex-col text-white relative"
      style={{
        backgroundImage: `
          url('/images/homeImage.jpg')
        `,
      }}
      id="home"
    >
      <div className="flex w-full h-full bg-gradient-to-b from-transparent to-black items-center flex-col">
        <div className="flex flex-row w-full h-[180px] justify-center items-center mt-2">
          <img
            src="/logo/logo1.PNG"
            alt="Logo Benim Planejados"
            className="w-42 h-26 rounded-2xl ml-10 hover:w-48 hover:h-30 hover:transition-all duration-500"
          />

          <ul className="flex flex-row gap-4 ml-auto mr-10 text-xl h-8 items-center">
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
        <div className="flex flex-col gap-10 w-full h-full items-center p-10">
          <h1 className="text-center text-6xl font-Saira font-bold text-white">
            Transformando Seus Projetos Em Realidade
          </h1>
          <p className="text-center w-[800px] font-Saira">
            Venha conhecer e conversar com o nosso time. Vamos trabalhar juntos
            para fazer com que o seu projeto saia do papel, com qualidade e
            eficiência.
          </p>

          <div className=" w-44 h-14 bg-neutral-200/40 rounded-[10px] backdrop-blur-lg flex flex-row items-center justify-center gap-2 hover:bg-neutral-300/40 hover:cursor-pointer hover:transition-all hover:duration-500">
            <div className="text-center justify-start text-white text-xl font-semibold font-Saira leading-loose tracking-tight">
              Orçamento Aqui!
            </div>
          </div>
        </div>
      </div>
      <div className="flex "></div>
    </motion.header>
  );
}
