"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic as Theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ClipboardPenIcon } from "lucide-react";

export default function ConfettiPage() {
  const [showToast, setShowToast] = useState(false);

  const fireConfetti = () => {
    // Left cannon
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0, y: 1 },
      angle: 60,
      startVelocity: 120,
      gravity: 0.5,
      ticks: 500,
    });

    // Right cannon
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 1, y: 1 },
      angle: 120,
      startVelocity: 120,
      gravity: 0.5,
      ticks: 500,
    });
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const codeString = `"use client";

import confetti from "canvas-confetti";

export default function Confetti() {
  const fireConfetti = () => {
    // Left cannon
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0, y: 1 },
      angle: 60,
      startVelocity: 120,
      gravity: 0.5,
      ticks: 500,
    });

    // Right cannon
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 1, y: 1 },
      angle: 120,
      startVelocity: 120,
      gravity: 0.5,
      ticks: 500,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={fireConfetti}
        className="px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
      >
        Celebrate! 🎉
      </button>
    </div>
  );
}
`;

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r relative">
        {showToast && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500">
            Copied to clipboard!
          </div>
        )}
        <div className="min-h-screen flex items-center justify-center">
          <button
            onClick={fireConfetti}
            className="px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
          >
            Celebrate! 🎉
          </button>
        </div>
      </div>

      <div className="w-1/2 p-4 overflow-auto flex flex-col justify-center relative">
        <button
          onClick={copyCodeToClipboard}
          className="absolute top-4 right-4 z-10 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2"
        >
          <ClipboardPenIcon className="h-4 w-4" />
          Copy Code
        </button>

        <SyntaxHighlighter
          language="typescript"
          style={Theme}
          customStyle={{ fontSize: "14px" }}
          showLineNumbers={true}
          className="w-full"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
