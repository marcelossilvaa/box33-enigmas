interface RiddleProps {
  title: string[];
  hint: string[];
  image: string;
}

export function Riddle({ title, hint, image }: RiddleProps) {
  return (
    <div>
      <h1 className="text-center font-bold bg-zinc-950 p-1 rounded-r-sm w-screen">
        <span className="text-yellow-100">{title[0]}</span> {title[1]}
      </h1>
      <div className="flex justify-center flex-col items-center gap-4">
        <p className="mt-4 text-center px-4">{hint[0]}</p>
        <img src={image} alt="" className="h-72 rounded-md" />
        <p className="text-center px-4">{hint[1]}</p>
        <input
          type="text"
          className="w-56 mt-4 py-1 px-2 text-black-500 rounded-md"
          placeholder="Digite sua resposta"
        />
        <button className="py-1 px-10 bg-yellow-400 text-black-500 rounded-md font-bold hover:bg-yellow-500">
          Responder
        </button>
      </div>
    </div>
  );
}
