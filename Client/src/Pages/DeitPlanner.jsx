import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const DietPlanner = () => {
  const pdfRef = useRef();

  const [diet, setDiet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handlePrint = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: "Diet_Plan_Report",
  });

  const fetchDietPlan = async () => {
    const userId = localStorage.getItem("userId");

    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8080/api/diet", {
        headers: {
          "Content-Type": "application/json",
          userId,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setDiet(data.dietPlan);
      console.log(data.dietPlan);
    } catch (err) {
      setError("Failed to fetch diet plan.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDietPlan();
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white p-6 w-full pt-20"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/28080/pexels-photo.jpg') ",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="flex justify-end mb-6">
        <button
          onClick={handlePrint}
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          📄 Download PDF
        </button>
      </div>

      <div
        className="w-4/5 mx-auto h-auto print:bg-white print:text-black print:p-10"
        ref={pdfRef}
      >
        {/* <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          🥗 Your Diet Planner
        </h1> */}

        {loading && <p className="text-center text-gray-400">Loading...</p>}
        {error && <p className="text-center text-red-400">{error}</p>}

        {diet && (
          <div className="space-y-10">
            {/* USER DETAILS */}
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-yellow-400">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                👤 Profile
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p>
                  <strong>Age:</strong> {diet.user_details.age}
                </p>
                <p>
                  <strong>Gender:</strong> {diet.user_details.gender}
                </p>
                <p>
                  <strong>Weight:</strong> {diet.user_details.weight_kg} kg
                </p>
                <p>
                  <strong>Goal:</strong> {diet.user_details.goal}
                </p>
                <p className="col-span-2">
                  <strong>Diet:</strong> {diet.user_details.dietary_preference}
                </p>
              </div>
            </div>

            {/* TARGETS */}
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-yellow-400">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
                🎯 Daily Targets
              </h2>

              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-black p-4 rounded-xl border border-yellow-400">
                  <p className="text-2xl font-bold text-yellow-400">
                    {diet.targets.calories}
                  </p>
                  <p className="text-xs text-gray-400">Calories</p>
                </div>

                <div className="bg-black p-4 rounded-xl border border-yellow-400">
                  <p className="text-2xl font-bold text-yellow-400">
                    {diet.targets.protein_g}g
                  </p>
                  <p className="text-xs text-gray-400">Protein</p>
                </div>

                <div className="bg-black p-4 rounded-xl border border-yellow-400">
                  <p className="text-2xl font-bold text-yellow-400">
                    {diet.targets.carbs_g}g
                  </p>
                  <p className="text-xs text-gray-400">Carbs</p>
                </div>

                <div className="bg-black p-4 rounded-xl border border-yellow-400">
                  <p className="text-2xl font-bold text-yellow-400">
                    {diet.targets.fat_g}g
                  </p>
                  <p className="text-xs text-gray-400">Fat</p>
                </div>
              </div>
            </div>

            {/* MEALS */}
            {["breakfast", "lunch", "snack", "dinner"].map((mealName) => {
              const meal = diet.meal_plan[mealName];

              return (
                <div
                  key={mealName}
                  className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-yellow-400"
                >
                  <h2 className="text-2xl font-semibold text-yellow-400 capitalize mb-6">
                    🍽 {mealName}
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    {meal.food_items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-black p-5 rounded-xl border border-yellow-400 hover:scale-105 transition"
                      >
                        <h3 className="text-lg font-bold text-yellow-400 mb-2">
                          {item.name}
                        </h3>

                        <div className="text-sm space-y-1 text-gray-300">
                          <p>
                            <strong>Qty:</strong> {item.quantity}
                          </p>
                          <p>
                            <strong>Calories:</strong> {item.calories} kcal
                          </p>
                          <p>
                            <strong>Protein:</strong> {item.protein_g} g
                          </p>
                          <p>
                            <strong>Carbs:</strong> {item.carbs_g} g
                          </p>
                          <p>
                            <strong>Fat:</strong> {item.fat_g} g
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Meal Total */}
                  <div className="mt-6 bg-yellow-400 text-black p-4 rounded-xl text-sm font-semibold">
                    Total → {meal.total.calories} kcal | Protein{" "}
                    {meal.total.protein}g | Carbs {meal.total.carbs}g | Fat{" "}
                    {meal.total.fat}g
                  </div>
                </div>
              );
            })}

            {/* DAILY SUMMARY */}
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-yellow-400">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                📦 Daily Intake Summary
              </h2>

              <div className="text-gray-300 space-y-2">
                <p>
                  <strong>Total Calories:</strong>{" "}
                  {diet?.meal_plan?.daily_totals?.calories}
                </p>
                <p>
                  <strong>Total Protein:</strong>{" "}
                  {diet?.meal_plan?.daily_totals?.protein}g
                </p>
                <p>
                  <strong>Total Carbs:</strong>{" "}
                  {diet?.meal_plan?.daily_totals?.carbs}g
                </p>
                <p>
                  <strong>Total Fat:</strong>{" "}
                  {diet?.meal_plan?.daily_totals?.fat}g
                </p>
              </div>
            </div>

            {/* SUGGESTIONS */}
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-yellow-400">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
                💡 Additional Suggestions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {diet.meal_plan.suggestions.additional_snacks.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="bg-black p-5 rounded-xl border border-yellow-400"
                    >
                      <h3 className="text-lg font-bold text-yellow-400 mb-2">
                        {item.name}
                      </h3>

                      <div className="text-sm text-gray-300 space-y-1">
                        <p>
                          <strong>Qty:</strong> {item.quantity}
                        </p>
                        <p>
                          <strong>Calories:</strong> {item.calories}
                        </p>
                        <p>
                          <strong>Protein:</strong> {item.protein}g
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlanner;
