import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  h-[250px]  text-white py-10 px-6 ">
      <div className=" flex justify-around items-center  gap-18 text-sm">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold  text-yellow-400 mb-4">FitLab</h2>
          <p>Track. Train.</p>
          <p>Transform.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h2>
          <p>Home</p>
          <p>Workouts</p>
          <p>Diet Planner</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-yellow-400  gap-3 mb-4">
            Contact
          </h2>
          <p>support@fitlab.com</p>
          <p>Instagram • YouTube</p>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm pt-3 mt-2  border-t border-gray-800 ">
        © 2025 FitLab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
