import { ArrowRight, Share2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import ama_logo from "/public/ama-logo.png";
import { Message } from "../components/message";

export function Room() {
  const { roomId } = useParams();

  function shareRoom() {
    const url = window.location.href.toString();
    if (navigator.share != undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
       toast.info("A url da sala foi copiada!")
    }
  }
  return (
    <div className="mx-auto text-zinc-50 max-w-[640px] flex flex-col gap-6 py-16 px-4">
      <header className="flex items-center">
        <div className="flex items-center gap-3">
          <img src={ama_logo} alt="Ama" className=" h-5 " />
          <p className="text-zinc-500 text-sm truncate">
            Código da sala: <span className="text-zinc-300">{roomId}</span>
          </p>
        </div>
        <button
          onClick={shareRoom}
          className="ml-auto bg-zinc-800 px-3 py-1.5 rounded-lg gap-1.5 flex items-center font-medium text-sm hover:bg-orange-500"
        >
          Compartilhar
          <Share2 className="size-4" />
        </button>
      </header>

      <div className="w-full bg-zinc-900 h-px " />

      <form className="flex items-center gap-2 bg-zinc-900 rounded-xl p-2 border border-zinc-800 ring-orange-400 ring-offset-1 ring-offset-zinc-950 focus-within:ring-1">
        <input
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta?"
          autoComplete="off"
          className="bg-transparent text-sm mx-2 text-zinc-50 placeholder:text-zinc-400 outline-none flex-1"
        />
        <button
          type="submit"
          className="bg-orange-400 text-orange-950 px-3 py-1.5 rounded-lg gap-1.5 flex items-center font-medium text-sm hover:bg-orange-500"
        >
          Criar pergunta <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8 ">
        <Message text={"Como funcionam as goroutines em GoLang e por que elas são importantes para a concorrência e paralelismo?"} amountToReaction={12}/>
        
        
        
      </ol>
    </div>
  );
}
