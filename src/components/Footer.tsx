import { motion } from "framer-motion";
import InstaLogo from "../assets/icons/instagram.svg?react";
import FacebookLogo from "../assets/icons/facebook.svg?react";
import WhatsappLogo from "../assets/icons/whatsapp.svg?react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full flex flex-col items-center justify-center"
      id="contato"
    >
      <div
        className="w-full h-80 flex flex-row items-center justify-center gap-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/footer.jpg')" }}
      >
        <div className="flex w-full h-full items-end justify-end mr-10">
          <div className="flex flex-col items-end justify-center gap-4 mb-6">
            <h1 className="text-4xl font-bold text-center font-Saira text-white">
              Quer receber nossas novidades?
            </h1>
            <div className="flex flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="Digite seu email"
                className="w-60 h-10 text-sm text-center font-Saira text-white bg-white/10 border-b-2 border-white"
              />
              <button className="text-sm text-center font-Saira text-white hover:text-black transition-all duration-300 hover:cursor-pointer hover:border-white hover:border-b-2 hover:rounded-lg hover:p-2 hover:bg-white">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 flex flex-row items-center justify-center gap-10 bg-tertiary">
        <div className="flex flex-col justify-between h-full w-5/6">
          <div className="flex flex-row items-center justify-center gap-4 w-full border-b-2 border-white">
            <div className="flex flex-col items-start justify-center gap-4 w-full h-24">
              <h1 className="text-2xl font-bold text-start font-Saira text-white">
                Benim Planejados
              </h1>
            </div>
            <div className="flex flex-row items-center justify-end gap-4 w-full">
              <a
                href="https://www.instagram.com/benimplanejados/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaLogo
                  width={24}
                  height={24}
                  fill="white"
                  className="hover:cursor-pointer"
                />
              </a>
              <a
                href="https://www.facebook.com/benimplanejados/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogo
                  width={24}
                  height={24}
                  fill="white"
                  className="hover:cursor-pointer"
                />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo
                  width={24}
                  height={24}
                  fill="white"
                  className="hover:cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full mt-4 h-full p-8">
            <ul className="flex flex-row items-center justify-center gap-4 w-full">
              <li>
                <a
                  href="#home"
                  className="font-Saira text-2xl text-white hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="font-Saira text-2xl text-white hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="font-Saira text-2xl text-white hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="font-Saira text-2xl text-white hover:font-bold hover:text-primary hover:border-b-4 hover:border-white transition-all"
                >
                  Contato
                </a>
              </li>
            </ul>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-sm text-white font-Saira">
                  Avenida Sacramento, 100 - Uberlãndia, Minas Gerais.
                </p>
                <div className="flex flex-row items-center justify-center gap-4 w-full">
                  <p className="text-sm text-white font-Saira">
                    (34) 99999-9999
                  </p>
                  <p className="text-sm text-white font-Saira">
                    contato@benimplanejados.com.br
                  </p>
                </div>
                <p className="text-xs text-white font-Saira">
                  &copy; 2025 Benim Planejados. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
