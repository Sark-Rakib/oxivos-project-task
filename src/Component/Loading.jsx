import React from "react";
const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
      </div>

      {/* Brand Name */}
      <h2 className="mt-8 text-3xl font-bold tracking-[8px]">OXIVOS</h2>

      <p className="mt-2 text-gray-500 tracking-widest uppercase text-sm">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
