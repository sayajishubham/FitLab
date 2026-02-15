import React, { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    email: "john@example.com",
    username: "john123",
    password: "password123",
    gender: "Male",
    age: 25,
    weight: 70,
    fitnessGoal: "Muscle Gain",
    foodPreference: "Vegetarian",
    fitnessLevel: "Beginner",
    workoutLocation: "Gym",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    // You can also add API calls to save changes
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">User Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(profile).map(([field, value]) => (
            <div key={field} className="flex flex-col">
              <label className="font-semibold mb-1 capitalize">{field}</label>

              {isEditing ? (
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={value}
                  onChange={handleChange}
                  className="border p-2 rounded-xl bg-white shadow-sm"
                />
              ) : (
                <p className="p-2 bg-gray-100 rounded-xl border">{value}</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={toggleEdit}
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}
