import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();


  return (
    <div className="flex flex-row">
      <div
        className="bg-white text-black rounded h-12 w-60 flex items-center justify-center translate-y-12 hover:bg-yellow-400 cursor-pointer"
      >
        <button className="text-3xl font-bold uppercase">Let's Work</button>
      </div>
    </div>
  );
};

export default Button;
