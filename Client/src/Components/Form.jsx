import React from "react";
import bgImage from "/src/assets/Images/img5.jpeg";
import BackgroundVideo from "../Components/Video";
import { Link } from "react-router-dom";

const FullForm = () => {
  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div
      className="relative min-h-screen w-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Video + Overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-yellow-300 transition-all z-20"
      >
        ← Back
      </button>

      {/* Form Card */}
      <div className="relative z-20 w-[420px] bg-black/50 backdrop-blur-lg border border-zinc-700 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl text-yellow-400 font-extrabold text-center uppercase tracking-wide mb-8">
          Create Account & Get Plan
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-white"
        >
          {/* Account Section */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-400 mb-2">
              Account Info
            </h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Username"
                className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <hr className="border-zinc-700 my-4" />

          {/* Fitness Section */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-400 mb-2">
              Fitness Info
            </h2>
            <div className="flex flex-col gap-3">
              <select className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option disabled selected>
                  Select Gender
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                type="number"
                placeholder="Age"
                className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <select className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option disabled selected>
                  Fitness Goal
                </option>
                <option>Lose Weight</option>
                <option>Gain Strength</option>
                <option>Gain Muscle</option>
              </select>

              <select className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option disabled selected>
                  Fitness Level
                </option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <select className="rounded-md p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option disabled selected>
                  Workout Location
                </option>
                <option>Home</option>
                <option>Gym</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-yellow-400 text-black text-lg font-semibold rounded-lg py-2 hover:bg-yellow-300 transition-all"
          >
            SignUp
          </button>
          <Link to="/SignIn">Already Have Account</Link>
        </form>
      </div>
    </div>
  );
};

export default FullForm;
