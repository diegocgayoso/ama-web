import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CreateRoom() {
  const navigate = useNavigate();
  function createNewRoom(data: FormData) {
    const theme = data.get('theme')?.toString();
      console.log(theme);
      
    navigate('/room/786asd78786cas');
  }

  return (
    <main className=" h-screen flex items-center justify-center">
      <div className="max-w-[454px] flex flex-col gap-4">
        <img src="/public/ama-logo.png" alt="Ama" className="w-10 m-auto" />
        <p className="text-zinc-300 leading-relaxed text-center">
          Crie uma sala pública de AMA (Ask me anything) e priorize as perguntas
          mais importantes para a comunidade.
        </p>

        <form
          className="flex items-center gap-2 bg-zinc-900 rounded-xl p-2 border border-zinc-900 ring-orange-400 ring-offset-1 ring-offset-zinc-950 focus-within:ring-1"
          action={createNewRoom}
        >
          <input
            type="text"
            name="theme"
            placeholder="Nome da sala"
            autoComplete="off"
            className="bg-transparent text-lg mx-2 text-zinc-50 placeholder:text-zinc-400 outline-none flex-1"
          />
          <button
            type="submit"
            className="bg-orange-400 text-orange-950 px-3 py-1.5 rounded-lg gap-1.5 flex items-center font-medium text-sm hover:bg-orange-500"
          >
            Criar sala <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
