export default function MiddleBar() {
  return (
    <div className="flex justify-center items-start w-full h-44 absolute">
      <div className="flex justify-around items-center w-9/12 h-30 bg-primary mt-[-50px] rounded-xl">
        <div className="flex flex-col gap-1 w-36 items-center justify-center">
          <h1 className="text-white text-1xl font-bold text-center font-Saira">
            Montagem Grátis
          </h1>
        </div>
        <div className="flex flex-col border-r-2 border-l-2  border-white w-58 items-center justify-center">
          <h1 className="text-white text-1xl font-bold text-center font-Saira p-3">
            Orçamento Rápido
          </h1>
        </div>
        <div className="flex flex-col gap-1 w-36 items-center justify-center">
          <h1 className="text-white text-1xl font-bold text-center font-Saira">
            Parcele Até 5x!
          </h1>
        </div>
      </div>
    </div>
  );
}
