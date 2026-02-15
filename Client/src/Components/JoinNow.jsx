import React from "react";

import FreeTrialBtn from "./FreeTrialBtn";

const JoinNow = () => {
  return (
    <div className=" h-80 bg-yellow-400 flex flex-col justify-center items-center text-black">
      <div className="text-center">
        <h1 className="text-6xl mb-2">Experience personalized</h1>
        <h1 className="text-5xl ">Workouts and diet plans</h1>
      </div>
      <FreeTrialBtn />
    </div>
  );
};

export default JoinNow;
