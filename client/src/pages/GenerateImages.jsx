import React from "react";

const GenerateImages = () => {
  const handleGenerateClick = () => {
    window.open("http://127.0.0.1:7861/", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          AI Image Generator
        </h1>
        <p className="text-gray-600 mb-8">
          Click the button below to open Stable Diffusion and start generating stunning images!
        </p>
        <button
          onClick={handleGenerateClick}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300"
        >
          Open Stable Diffusion
        </button>
        <p className="text-gray-400 text-sm mt-6">
          Requires Stable Diffusion Web UI running locally.
        </p>
      </div>
    </div>
  );
};

export default GenerateImages;
