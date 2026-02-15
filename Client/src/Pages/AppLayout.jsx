import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function AppLayout() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
