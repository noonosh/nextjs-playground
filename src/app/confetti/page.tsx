"use client";

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
