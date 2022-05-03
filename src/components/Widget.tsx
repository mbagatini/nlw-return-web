import { useState } from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleWidgetVisibility() {
    setIsOpen(!isOpen);
  }

  return (
    <Popover className="absolute bottom-6 right-6">
      <Popover.Button
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
        onClick={() => toggleWidgetVisibility()}
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <h1>oieee</h1>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
