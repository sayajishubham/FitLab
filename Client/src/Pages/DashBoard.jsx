import React from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <nav className="w-full h-18 flex justify-around items-center fixed top-0 z-30 bg-opacity-50 p-4">
      <h1 className="text-4xl font-extrabold tracking-wide uppercase">
        Fitlab
      </h1>
      <ul className="flex gap-15 uppercase">
        <li>
          <Link
            to="/"
            className="text-2xl font-bold hover:text-yellow-400 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Form"
            className="text-2xl font-bold hover:text-yellow-400 cursor-pointer"
          >
            WorkoutPlanner
          </Link>
        </li>
        <li>
          <Link
            to="/DeitPlanner"
            className="text-2xl font-bold hover:text-yellow-400 cursor-pointer"
          >
            DeitPlanner
          </Link>
        </li>
        <li>
          <Link
            to="Exercise"
            className="text-2xl font-bold hover:text-yellow-400 cursor-pointer"
          >
            Exercise
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashBoard;
