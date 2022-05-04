import { useState } from "react";

import BugImageUrl from "../../assets/bug.svg";
import BulbImageUrl from "../../assets/idea.svg";
import CloudImageUrl from "../../assets/thought.svg";
import { WidgetTypeStep } from "./WidgetTypeStep";
import { WidgetContentStep } from "./WidgetContentStep";
import { WidgetSuccessStep } from "./WidgetSuccessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState(null as FeedbackType | null);
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setIsFeedbackSent(false);
    setFeedbackType(null);
  }

  function handleSendFeedback() {
    setIsFeedbackSent(true);
  }

  return (
    <div className="bg-zinc-900 p-4 mb-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSent ? (
        <WidgetSuccessStep onRestartFeedbackRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <WidgetTypeStep setFeedbackType={setFeedbackType} />
          ) : (
            <WidgetContentStep
              feedbackType={feedbackType}
              onRestartFeedbackRequested={handleRestartFeedback}
              onFeedbackSent={handleSendFeedback}
            />
          )}
        </>
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
