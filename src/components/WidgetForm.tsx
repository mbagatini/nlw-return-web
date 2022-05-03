import { CloseButton } from "./CloseButton";

import BugImageUrl from "../assets/bug.svg";
import BulbImageUrl from "../assets/idea.svg";
import CloudImageUrl from "../assets/thought.svg";
import { useState } from "react";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: { source: BugImageUrl, alt: "Imagem de um inseto" },
  },
  IDEA: {
    title: "Ideia",
    image: { source: BulbImageUrl, alt: "Imagem de uma lâmpada" },
  },
  OTHER: {
    title: "Outro",
    image: { source: CloudImageUrl, alt: "Imagem de uma nuvem" },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState(null as FeedbackType | null);

  return (
    <div className="bg-zinc-900 p-4 mb-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedkback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedbackTypes).map(([key, value]) => (
            <button
              key={key}
              type="button"
              className="bg-zinc-800 py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none rounded-lg"
              onClick={() => setFeedbackType(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          ))}
        </div>
      ) : (
        <h1>hello guys</h1>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          href="https://www.rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
