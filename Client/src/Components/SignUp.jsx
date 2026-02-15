import { useState } from "react";
// import { Link,  } from "react-router-dom";
import axios from "axios";

export default function SignUp({ onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    weight: "",
    fitnessGoal: "",
    foodPreference: "",
    fitnessLevel: "",
    workoutLocation: "",
    height: "",
    activityLevel: "",
    injuries: "",
    budgetLevel: "",
    mealsPerDay: "",
    trainingDays: "",
    workoutType: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/users/signup",
        formData,
      );

      if (res.ok) {
        alert("Signup successful!");

        if (onSwitchToLogin) {
          onSwitchToLogin();
        }
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed");
    }

    setLoading(false);
  };

  return (
    <div className="bg-black/90 backdrop-blur-md text-white border border-white/30 rounded-3xl p-8 md:p-12 w-full max-w-4xl shadow-2xl relative overflow-y-auto max-h-[90vh]">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>
      )}

      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Sign Up
      </h2>

      {error && (
        <p className="text-red-400 text-center mb-6 font-semibold">{error}</p>
      )}
      <div className="px-4 md:px-8">
        <form
          onSubmit={handleSignUp}
          className="grid grid-cols-2 gap-x-8 gap-y-6 w-full px-2 mb-8"
        >
          {/* Username */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">Username:</label>
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">Email:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">Password:</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Gender */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Age */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">Age:</label>
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Weight */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Weight (kg):
            </label>
            <input
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Fitness Goal */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Fitness Goal:
            </label>
            <select
              name="fitnessGoal"
              value={formData.fitnessGoal}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>Fat Loss</option>
              <option>Muscle Gain</option>
              <option>General Fitness</option>
            </select>
          </div>

          {/* Food Preference */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Food Preference:
            </label>
            <select
              name="foodPreference"
              value={formData.foodPreference}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Vegan</option>
            </select>
          </div>

          {/* Fitness Level */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Fitness Level:
            </label>
            <select
              name="fitnessLevel"
              value={formData.fitnessLevel}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Workout Location */}
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Workout Location:
            </label>
            <select
              name="workoutLocation"
              value={formData.workoutLocation}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>Home</option>
              <option>Gym</option>
              <option>Outdoor</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Height (cm):
            </label>
            <input
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Activity Level:
            </label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>Sedentary</option>
              <option>Lightly Active</option>
              <option>Moderately Active</option>
              <option>Very Active</option>
              <option>Extremely Active</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">Injuries:</label>
            <input
              name="injuries"
              value={formData.injuries}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Budget Level:
            </label>
            <select
              name="budgetLevel"
              value={formData.budgetLevel}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Meals Per Day:
            </label>
            <input
              name="mealsPerDay"
              value={formData.mealsPerDay}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Training Days:
            </label>
            <input
              name="trainingDays"
              value={formData.trainingDays}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium">
              Workout Type:
            </label>
            <select
              name="workoutType"
              value={formData.workoutType}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select…</option>
              <option>CrossFit</option>
              <option>Hypertrophy</option>
              <option>Strength</option>
              <option>Endurance</option>
            </select>
          </div>

          {/* Signup Button — full width */}
          <div className="col-span-2 mt-4">
            <button
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition disabled:opacity-60 shadow-lg"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-yellow-400 underline font-semibold hover:text-yellow-300 bg-transparent border-none cursor-pointer"
        >
          Login
        </button>
      </p>
    </div>
  );
}
