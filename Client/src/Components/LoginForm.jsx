import React, { useState } from "react";

export default function LoginForm({ onClose, onSwitchToSignUp, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8080/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("✅ Login successful!");
        localStorage.setItem("userId", data.user._id);
        if (onLogin) {
          onLogin();
        }

        // window.location.reload(); // Optional
      } else {
        alert(`❌ Login failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("⚠️ Server not reachable or some error occurred.");
    }
  };

  return (
    <div className="relative z-20 flex justify-center w-full">
      <div className="w-full max-w-md rounded-2xl border border-zinc-600 p-8 md:p-10 bg-black/90 backdrop-blur-md shadow-2xl relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
          >
            ✕
          </button>
        )}

        <h1 className="text-4xl text-yellow-400 flex justify-center mb-8">
          Login Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-white gap-5"
        >
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded p-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded p-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="mt-10 bg-amber-400 rounded-2xl w-[150px] h-10 text-2xl text-black font-bold self-center hover:bg-amber-300 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-white mt-4">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToSignUp}
            className="text-yellow-400 underline hover:text-yellow-300 bg-transparent border-none cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
