import { useState } from "react";
import { useFitness } from "../context/FitnessContext";
import WorkoutCard from "../components/WorkoutCard";

export default function Workout() {
  const { workouts } = useFitness();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredWorkouts = workouts.filter((workout) => {
    const matchSearch = workout.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      workout.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-6xl mx-auto">

      {/* Judul */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          My Workout
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Cari dan lihat semua aktivitas latihan kamu.
        </p>
      </div>

      {/* Search dan Filter */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 mb-8 border border-gray-200 dark:border-gray-800">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Search */}
          <div>
            <label className="block font-semibold text-gray-800 dark:text-white mb-2">
              Cari Workout
            </label>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Contoh: Running"
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter */}
          <div>
            <label className="block font-semibold text-gray-800 dark:text-white mb-2">
              Filter Kategori
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">
                Semua Kategori
              </option>

              <option value="Cardio">
                Cardio
              </option>

              <option value="Strength">
                Strength
              </option>

              <option value="Flexibility">
                Flexibility
              </option>
            </select>
          </div>

        </div>
      </div>

      {/* Hasil Workout */}
      {filteredWorkouts.length === 0 ? (

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 text-center border border-gray-200 dark:border-gray-800">

          <p className="text-gray-500 dark:text-gray-400">
            Workout tidak ditemukan.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {filteredWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}

        </div>

      )}

    </div>
  );
}