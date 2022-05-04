import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";

import { Loading } from "./Loading";

interface ScreenShotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTaken,
}: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    // o ! força o ts a reconhecer que nunca vai retornar nulo
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTaken(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTaken(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      className="p-2 bg-zinc-800 rounded-md border-transparent transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      type="button"
      onClick={handleTakeScreenshot}
    >
      {!isTakingScreenshot ? <Camera className="w-6 h-6" /> : <Loading />}
    </button>
  );
}
