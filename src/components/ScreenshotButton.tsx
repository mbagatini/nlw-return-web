import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";

import { Loading } from "./Loading";

interface ScreenShotButtonProps {
  onScreenshotTaken: (screenshot: string) => void;
}

export function ScreenshotButton({ onScreenshotTaken }: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    // o ! força o ts a reconhecer que nunca vai retornar nulo
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTaken(base64image);

    setIsTakingScreenshot(false);
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
