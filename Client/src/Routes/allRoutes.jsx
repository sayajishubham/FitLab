import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import DietPlanner from "../Pages/DeitPlanner";
import WorkoutPlanner from "../Pages/Workout";
import Home from "../Pages/Home";
import AppLayout from "../Pages/AppLayout";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/DeitPlanner" element={<DietPlanner />} />
          <Route path="/workout" element={<WorkoutPlanner />} />
        </Route>
      </Routes>
    </div>
  );
}
