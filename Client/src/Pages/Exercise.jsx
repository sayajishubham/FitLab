import React from "react";
import FrontBody from "../Components/FrontBOdy";
import BackBody from "../Components/BackBody";

const Exercise = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center relative">
      {/* Back button */}
      <button
        onClick={handleBack}
        className="absolute top-5 left-5 bg-yellow-400 text-black !px-3 !py-1 rounded text-sm font-semibold hover:bg-yellow-300 transition-all"
      >
        ← Back
      </button>
      {/* Heading + paragraph */}
      <div className="text-center mt-10 mb-8">
        <h1 className="text-5xl font-bold text-yellow-400  ">
          Generate Workout
        </h1>
        <p className="text-zinc-800 text-sm mt-2 max-w-md mx-auto">
          Select your desired muscle focus and generate a personalized workout
          plan to build strength and balance.
        </p>
      </div>

      {/* Body structures side by side */}
      <div className="flex justify-center items-center mt-15!  gap-20">
        <FrontBody />
        <BackBody />
      </div>

      {/* Generate button below both */}
      <button className="mt-8 bg-amber-400 px-6! py-2! rounded-2xl text-lg font-semibold text-black hover:bg-emerald-400 cursor-pointer transition-all">
        Generate
      </button>
    </div>
  );
};

export default Exercise;
