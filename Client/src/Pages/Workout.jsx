import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

const WorkoutPlanner = () => {
  const pdfRef = useRef();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handlePrint = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: "Workout_Plan_Report",
  });

  const back = () => window.history.back();

  const fetchWorkoutPlan = async () => {
    const userId = localStorage.getItem("userId");

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("http://127.0.0.1:8080/api/workout", {
        headers: { userId },
      });

      setWorkout(res.data.workout);
    } catch (err) {
      console.error("❌ Error fetching workout:", err);
      setError("Failed to fetch workout plan. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkoutPlan();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-20">
      {/* Top Buttons */}
      <div className="flex justify-between mb-6">
        <button
          onClick={handlePrint}
          className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300"
        >
          📄 Download PDF
        </button>
      </div>

      <div
        ref={pdfRef}
        className="w-4/5 mx-auto print:bg-white print:text-black print:p-10"
      >
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          🏋️ Weekly Workout Plan
        </h1>

        {loading && <p className="text-center text-gray-400">Loading...</p>}
        {error && <p className="text-center text-red-400">{error}</p>}

        {workout && (
          <div className="space-y-10">
            {/* SUMMARY */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-yellow-400">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                📋 Program Summary
              </h2>
              <p className="text-gray-300 leading-relaxed">{workout.summary}</p>
            </div>

            {/* WEEKLY SPLIT */}
            {workout.weeklySplit?.map((day, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl p-6 border border-yellow-400"
              >
                <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
                  {day.day}
                </h2>
                <p className="text-sm text-gray-400 mb-6">Focus: {day.focus}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {day.exercises.map((exercise, i) => (
                    <div
                      key={i}
                      className="bg-black p-5 rounded-xl border border-yellow-400"
                    >
                      <h3 className="text-lg font-bold text-yellow-400 mb-3">
                        {exercise.name}
                      </h3>

                      <div className="text-sm text-gray-300 space-y-1">
                        <p>
                          <strong>Sets:</strong> {exercise.sets}
                        </p>

                        {exercise.reps && (
                          <p>
                            <strong>Reps:</strong> {exercise.reps}
                          </p>
                        )}

                        {exercise.duration && (
                          <p>
                            <strong>Duration:</strong> {exercise.duration}
                          </p>
                        )}

                        <p>
                          <strong>Rest:</strong> {exercise.rest}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPlanner;
