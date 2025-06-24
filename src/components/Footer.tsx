export default function Footer() {
  return (
    <div
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
      <div className="w-full h-60 flex flex-row items-center justify-center gap-10 bg-tertiary">
        <div className="flex flex-col justify-between h-full w-5/6">
          <div className="flex flex-row items-center justify-center gap-4 w-full">
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <h1 className="text-2xl font-bold text-start font-Saira text-white">
                Benim Planejados
              </h1>
            </div>
            <div className="flex flex-row items-center justify-end gap-4 w-full bg-blue-500">
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className="w-10 h-10"
              />
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="w-10 h-10"
              />
              <img
                src="/images/linkedin.png"
                alt="Linkedin"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
