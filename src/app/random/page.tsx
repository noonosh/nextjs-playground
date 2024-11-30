"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [uuid, setUuid] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setUuid(crypto.randomUUID());
  }, []);

  const copyToClipboard = (id: string) => {
    navigator.clipboard.writeText(id);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showToast && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500">
          Copied to clipboard!
        </div>
      )}
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-sm text-gray-500 inline-block mb-2"></span>
        <div className="text-2xl font-bold">
          Random UUID:{" "}
          <span className="relative group">
            <span
              className="text-indigo-500 font-bold cursor-pointer hover:opacity-80"
              onClick={() => copyToClipboard(uuid)}
            >
              {uuid}
            </span>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
              <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Click to copy
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                <div className="border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </span>
        </div>
        <button
          className="bg-indigo-500 font-bold text-white p-2 rounded-md mt-4"
          onClick={() => setUuid(crypto.randomUUID())}
        >
          Generate new UUID
        </button>
      </div>
    </div>
  );
}
