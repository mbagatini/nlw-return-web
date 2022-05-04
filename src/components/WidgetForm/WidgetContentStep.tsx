import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";

import { FeedbackType, feedbackTypes } from ".";
import { CloseButton } from "../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface WidgetContentStepProps {
  feedbackType: FeedbackType;
  onRestartFeedbackRequested: () => void;
  onFeedbackSent: () => void;
}

export function WidgetContentStep({
  feedbackType,
  onRestartFeedbackRequested,
  onFeedbackSent,
}: WidgetContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function handleScreenshotTaken(screenshot: string | null) {
    setScreenshot(screenshot);
  }

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log("Submitting feedback", message, screenshot);

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onRestartFeedbackRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[240px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTaken={handleScreenshotTaken}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!message.length}
          >
            Enviar
          </button>
        </footer>
      </form>
    </>
  );
}
