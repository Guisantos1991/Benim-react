import { motion } from "framer-motion";

export default function MidSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center w-full h-90 mt-32 p-0 m-0 mb-10"
    >
      <div className="flex flex-row w-[960px] h-80 items-center">
        <div className="flex items ">
          <img
            className="w-[440px] h-[290px] rounded-sm"
            src="/images/bannerHome.jpg"
            alt="Imagem do banner"
          />
        </div>

        <div className="flex flex-col text-justify font-Saira text-black p-4 gap-4 w-2/3 h-full">
          <h1 className="text-2xl font-bold w-[380px]">
            Cuidando De Cada Etapa Do Seu Projeto!
          </h1>
          <p className="font-Saira text-xs">
            Trabalhamos todos os dias para construir o que você precisa para o
            seu negócio, casa ou ambiente.
          </p>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-start gap-1">
              <img
                src="/logo/Ic_chechlist.svg"
                alt="Logo da LC"
                className="w-6 h-6"
              />
              <p className="font-Saira text-xs font-bold">
                Qualidade e Acabamento
              </p>
            </div>
            <p className="font-Saira text-xs w-[380px] ml-8">
              Com foco na construção de alta qualidade e acabamento, trabalhamos
              com técnicas e profissionais qualificados para garantir a
              excelência em cada etapa do projeto.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-start gap-1">
              <img
                src="/logo/Ic_chechlist.svg"
                alt="Logo da LC"
                className="w-6 h-6"
              />
              <p className="font-Saira text-xs font-bold">
                Materiais e Eficiência{" "}
              </p>
            </div>
            <p className="font-Saira text-xs w-[380px] ml-8">
              Alinhado com a perspectiva de longo prazo, utilizamos materiais de
              qualidade para garantir a durabilidade e a estética do seu
              projeto.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
